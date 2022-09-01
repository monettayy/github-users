<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cache;

use App\Helper\API;

class GithubController extends Controller
{
    public function findUsers(Request $request)
    {
        $input = $request->all();
        if(!isset($input['usernames'])){
            return response()->json([
                'success' => false,
                'message' => 'No usernames from payload',
                'input' => $input
            ]);
        }

        $list_username = explode (",", $input['usernames']); 
        
        \Log::channel('user_operations')
            ->info('FIND_USERNAMES|'.strtoupper(\Auth::user()->username), collect($input)->toArray());

        // maximum of 10 names
        if(count($list_username) > 10){
            return response()->json([
                'success' => false,
                'message' => 'Maximum of 10 names per request only',
                'input' => $input
            ]);
        }

        $data = [];
        foreach ($list_username as $key => $username){
            $username = trim($username);

            // check if exists in redis
            $cached_user = Cache::get('user_' . $username);
            if(isset($cached_user)) {
                $response = $cached_user;
                \Log::channel('user_operations')
                    ->info('REDIS_USER_REQUEST|'."users/{$username}", collect($response)->toArray()); 
            }else {
                // otherwise call to Github API
                $response = API::fetch_data("users/", $username);
                Cache::put('user_' . $username, $response, 120); // 2 mins
                \Log::channel('user_operations')
                    ->info('GITHUB_USER_REQUEST|'."users/{$username}",  collect($response)->toArray()); 
            }
            
            if(isset($response['id'])){
                $ave_followers = ($response['followers'] / $response['public_repos']);
                if($ave_followers > 0){
                    $ave_followers = number_format($ave_followers, 2);
                }
                $item = [
                    'username'=>$username,
                    'status'=>true,
                    'name'=>$response['name'],
                    'login'=>$response['login'],
                    'company'=>$response['company'],
                    'followers'=>$response['followers'],
                    'public_repos'=>$response['public_repos'],
                    'ave_followers'=>$ave_followers,
                ];
                array_push($data, $item);
            }else{
                $item = [
                    'username'=>$username,
                    'status'=>false,
                ];
                array_push($data, $item);
            }
        }

        // sort alphabetically by name
        $data = collect($data)->sortBy(function ($d, $k){
            if(isset($d['name'])){
                return $d['status'].$d['name'];
            }else{
                return $d['status'].$d['username'];
            }
        })->values()->all();
        
        return response()->json([
            'success' => true,
            'message' => 'Success',
            'data' => $data
        ]);
    }
}

<?php

namespace App\Helper;

use Illuminate\Database\Eloquent\Model;

class API extends Model
{
    /**
     * Retrieves data from given api url endpoint and parameters
     *
     * @param   string   $endpoint
     * @param   string   $params
     * @return  object
     */
    public static function fetch_data(string $endpoint, string $params = null)
    {
        $api_url = env('GITHUB_API_URL');

        $resource_url = $api_url.$endpoint.$params;
        
        // $http = new \GuzzleHttp\Client(['http_errors' => false]);
        // try{
        //     $response = $http->get($resource_url, []);
        //     return json_decode($response->getBody(), true);
        // }
        // catch (exception $e) {
        //     \Log::channel('user_operations')
        //         ->error('ERROR_OCCURED|'.strtoupper(\Auth::user()->username).'|'.$resource_url, $e->toArray());

        //     return response()->json([
        //         'success'=>false,
        //         'message'=>'Not Found'
        //     ]);
        // }

    // mock data
        // return [
        //     "login"=> "monettayy",
        //     "id"=> 33116790,
        //     "node_id"=> "MDQ6VXNlcjMzMTE2Nzkw",
        //     "avatar_url"=> "https://avatars.githubusercontent.com/u/33116790?v=4",
        //     "gravatar_id"=> "",
        //     "url"=> "https://api.github.com/users/monettayy",
        //     "html_url"=> "https://github.com/monettayy",
        //     "followers_url"=> "https://api.github.com/users/monettayy/followers",
        //     "following_url"=> "https://api.github.com/users/monettayy/following{/other_user}",
        //     "gists_url"=> "https://api.github.com/users/monettayy/gists{/gist_id}",
        //     "starred_url"=> "https://api.github.com/users/monettayy/starred{/owner}{/repo}",
        //     "subscriptions_url"=> "https://api.github.com/users/monettayy/subscriptions",
        //     "organizations_url"=> "https://api.github.com/users/monettayy/orgs",
        //     "repos_url"=> "https://api.github.com/users/monettayy/repos",
        //     "events_url"=> "https://api.github.com/users/monettayy/events{/privacy}",
        //     "received_events_url"=> "https://api.github.com/users/monettayy/received_events",
        //     "type"=> "User",
        //     "site_admin"=> false,
        //     "name"=> "Monette Fornaleza",
        //     "company"=> null,
        //     "blog"=> "",
        //     "location"=> null,
        //     "email"=> null,
        //     "hireable"=> null,
        //     "bio"=> null,
        //     "twitter_username"=> null,
        //     "public_repos"=> 18,
        //     "public_gists"=> 0,
        //     "followers"=> 0,
        //     "following"=> 0,
        //     "created_at"=> "2017-10-26T08:10:51Z",
        //     "updated_at"=> "2022-08-11T02:01:05Z"
        // ];

        if($params == 'monettayy')
            return [
                'id' => 1,
                'name' => 'Monette Fornaleza',
                'login' => 'monettayy',
                'company' => null,
                'followers' => 0,
                'public_repos' => 18
            ];
        if($params == 'jhyv')
            return [
                'id' => 1,
                'name' => 'Jhayvee Michael Atencia',
                'login' => 'jhyv',
                'company' => "PLGU Camsur",
                'followers' => 0,
                'public_repos' => 9 
            ];
        if($params == 'Kucoin')
            return [
                'id' => 2,
                'name' => "KuCoin Exchange",
                'login' => 'Kucoin',
                'company' => null,
                'followers' => 0,
                'public_repos' => 24
            ];
        if($params == 'xMartin')
            return [
                'id' => 3,
                'name' => null,
                'login' => 'xMartin',
                'company' => null,
                'followers' => 68,
                'public_repos' => 61
            ];
        if($params == 'nextcloud')
            return [
                'id' => 4,
                'name' => "Nextcloud",
                'login' => 'nextcloud',
                'company' => null,
                'followers' => 0,
                'public_repos' => 258
            ];
    }
}

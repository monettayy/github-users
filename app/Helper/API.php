<?php

namespace App\Helper;

class API
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
        
        $http = new \GuzzleHttp\Client(['http_errors' => false]);
        try{
            $response = $http->get($resource_url, []);
            return json_decode($response->getBody(), true);
        }
        catch (exception $e) {
            \Log::channel('user_operations')
                ->error('ERROR_OCCURED|'.strtoupper(\Auth::user()->username).'|'.$resource_url, $e->toArray());

            return response()->json([
                'success'=>false,
                'message'=>'Not Found'
            ]);
        }
    }
}

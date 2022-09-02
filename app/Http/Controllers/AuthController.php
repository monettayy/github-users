<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Validator;
use Auth;

use App\Models\User;

class AuthController extends Controller
{
    public function login(Request $request)
    {
        $input = $request->all();
        $validator = Validator::make($input, [
            'username' => 'required',
            'password' => 'required',
        ]);
        if($validator->fails()){
            return response()->json([
                'status'=>'Error',
                'message'=>'Incomplete form details',
                'errors'=>$validator->messages()
            ],200);
        }

        if(Auth::attempt($request->only('username', 'password')))
        {
            $user = Auth::user();
            \Log::channel('user_operations')
                ->info('LOGIN_SUCESS|', $user->toArray());

            return response()->json([
                'success' => true,
                'user' => $user,
                'token' => $user->createToken('access_token')->plainTextToken,
                'redirect' => route('home')
            ]);
        }

        return response()->json([
            'success' => false,
            'message' => 'Unauthorized login attempt',
        ]);
    }

    public function logout(Request $request)
    {
        if(Auth::guard('web')->check())
        {
            Auth::guard('web')->logout();
        }
        else if(Auth::guard('api')->check())
        {
            $request->user()->tokens()->delete();
        }

        return response()->json([
            'success' => true,
            'redirect' => route('login'),
        ]);
    }
    
    public function register(Request $request)
    {
        $input = $request->all();
        $validator = Validator::make($input, [
            'name' => 'required',
            'username' => 'required|unique:users',
            'password' => 'required|min:6',
            'repeat_password' => 'required|same:password'
        ]);
        if($validator->fails()){
            return response()->json([
                'status'=>'Error',
                'message'=>'Incomplete form details',
                'errors'=>$validator->messages()
            ],200);
        }

        $input['is_admin'] = 0;
        $user = User::create($input);
        \Log::channel('user_operations')
            ->info('REGISTRATION_SUCESS|', $user->toArray());

        return response()->json([
            'success' => true,
            'message' => 'Successfully registered. Login to continue',
            'redirect' => '/login',
        ]);
    }
}

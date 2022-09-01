<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Auth;

use App\Models\User;

class AuthController extends Controller
{
    public function login(Request $request)
    {
        $request->validate([
            'username' => 'required',
            'password' => 'required',
        ]);

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

    public function logout()
    {
        if(Auth::check())
        {
            Auth::guard('web')->logout();
        }

        return response()->json([
            'success' => true,
            'redirect' => route('login'),
        ]);
    }
    
    public function register(Request $request)
    {
        $request->validate([
            'name' => 'required',
            'username' => 'required|unique:users',
            'password' => 'required|min:6',
        ]);

        $input = $request->all();
        $input['is_admin'] = 0;

        $user = User::create($input);

        return response()->json([
            'success' => true,
            'message' => 'Successfully registered. Login to continue',
            'redirect' => '/login',
        ]);
    }
}

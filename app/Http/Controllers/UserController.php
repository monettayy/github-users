<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Validator;
use Crypt;

use App\Models\User;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return view('pages.users.index');
    }

    /**
     * Returns the list of Table.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function list(Request $request)
    {
        $input = $request->all();
        $list = User::get();

        return response()->json([
            'success' => true,
            'message' => 'Success',
            'data' => $list,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('pages.users.create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $input = $request->all();
        $validator = Validator::make($input, [
            'name' => 'required',
            'username' => 'required|unique:users',
            'password' => 'required|min:6',
            'repeat_password' => 'required|same:password',
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
            ->info('CREATE_USER|'.strtoupper(\Auth::user()->username), $user->toArray());


        return response()->json([
            'success' => true,
            'message' => 'Successfully created account',
            'data' => $user,
            'redirect' => '/users',
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $user = User::findOrFail(Crypt::decryptString($id));

        return view('pages.users.edit', compact('user'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $input = $request->all();
        $user = User::findOrFail($id);

        $request->validate([
            'name' => 'required',
            'username' => 'required',
        ]);

        // validate username change
        if($user->username != $input['username']){
            $request->validate([
                'username' => 'required|unique:users',
            ]);
        }

        // validate password change
        if(isset($input['password']) && (strlen($input['password']) > 0)){
            $request->validate([
                'password' => 'required|min:6',
                'repeat_password' => 'required|same:password',
            ]);
        }else{
            unset($input['password']);
        }

        $user->update($input);
        \Log::channel('user_operations')
            ->info('UPDATE_USER|'.strtoupper(\Auth::user()->username), $user->toArray());

        
        return response()->json([
            'success' => true,
            'message' => 'Successfully updated account',
            'data' => $user
        ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $user = User::findOrFail($id);
        $user->delete();
        \Log::channel('user_operations')
            ->info('DELETE_USER|'.strtoupper(\Auth::user()->username), $user->toArray());

        return response()->json([
            'success' => true,
            'message' => 'Successfully deleted user'
        ]);
    }
}

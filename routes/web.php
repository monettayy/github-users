<?php

use Illuminate\Support\Facades\Route;

use App\Http\Controllers\AuthController;
use App\Http\Controllers\PageController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\GithubController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return redirect()->route('login');
});

Route::get('/login', [PageController::class, 'login'])->name('login');
Route::get('/register', [PageController::class, 'register'])->name('register');

Route::post('/login', [AuthController::class, 'login']);
Route::post('/register', [AuthController::class, 'register']);

Route::group(['middleware'=>'auth:sanctum'], function ($route) {
    $route->get('/home', [PageController::class, 'home'])->name('home');
    $route->get('/users', [UserController::class, 'index'])->name('users.index');
    $route->get('/users/create', [UserController::class, 'create'])->name('users.create');
    $route->get('/users/{user}', [UserController::class, 'show'])->name('users.show');
    $route->get('/users/{user}', [UserController::class, 'show'])->name('users.show');

    $route->post('/users', [UserController::class, 'store'])->name('users.store');
    $route->put('/users/{user}', [UserController::class, 'update'])->name('users.update');
    $route->delete('/users/{user}', [UserController::class, 'destroy'])->name('users.destroy');
    $route->get('/users-list', [UserController::class, 'list'])->name('users.list');
    
    $route->get('/github-users', [GithubController::class, 'findUsers'])->name('github.users');
    
    $route->post('/logout', [AuthController::class, 'logout']);
});
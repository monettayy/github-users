<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\AuthController;
use App\Http\Controllers\PageController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\GithubController;
use App\Http\Controllers\HammingDistanceController;
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('/login', [AuthController::class, 'login']);
Route::post('/register', [AuthController::class, 'register']);

Route::get('/hamming-distance/compute',[HammingDistanceController::class, 'computeHammingDistance']);

Route::group(['middleware'=>'auth:sanctum'], function ($route) {
    
    $route->get('/github-users', [GithubController::class, 'findUsers'])->name('github.users');
    $route->post('/logout', [AuthController::class, 'logout']);
});

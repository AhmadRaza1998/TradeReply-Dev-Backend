<?php

use App\Http\Controllers\API\AuthController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::middleware('guest')->post('/register', [AuthController::class, 'register']);

Route::middleware('guest')->post('/login', [AuthController::class, 'login']);

Route::middleware('auth')->post('/logout', [AuthController::class, 'logout']);


Route::middleware('auth')->get('/user', function (Request $request) {
    return response()->json(Auth::user());
});

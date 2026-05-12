<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
//Auth Public
Route::post('/register',[AuthController::class,'register']);
Route::post('/login',[AuthController::class ,'login']);

//private
Route::middleware('auth:sanctum')->group(function () => {

	Route::post('/logout' ,[AuthController::class , 'logout']);
	Route::post('/logout-all',[AuthController::class ,'logoutFromAll']);
});

<?php

use App\Http\Controllers\CompanyController;
use App\Http\Controllers\JobController;
use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Route;

//['prefix' => 'v1', 'middleware' => ['auth:sanctum']],
//  ['prefix' => 'v1']

//TODO: Dont forget to change this
Route::group(
    ['prefix' => 'v1'],
    function () {
        Route::apiResource('users', UserController::class);
        Route::apiResource('companies', CompanyController::class);
        Route::apiResource('jobs', JobController::class);

    }
);
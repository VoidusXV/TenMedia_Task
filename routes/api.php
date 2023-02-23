<?php

use App\Http\Controllers\CompanyController;
use App\Http\Controllers\JobController;
use App\Http\Controllers\UserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::group(
    ['prefix' => 'v1'],
    function () {
        Route::apiResource('users', UserController::class);
        Route::apiResource('companies', CompanyController::class);
        Route::apiResource('jobs', JobController::class);

    }
);
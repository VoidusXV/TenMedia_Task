<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Http\Requests\StoreUserRequest;
use App\Models\Company;
use App\Helpers\DatabaseHelper;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return response()->json("User Index");
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreUserRequest $request)
    {
        if (!DatabaseHelper::companyExists($request))
            return response()->json("Company doesnt exist", 422);

        User::create($request->validated());
        return response()->json("User created");

    }
}
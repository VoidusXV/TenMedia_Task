<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Http\Requests\StoreUserRequest;
use App\Helpers\DatabaseHelper;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return User::all();
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreUserRequest $request)
    {
        if (!DatabaseHelper::companyExists($request))
            return response()->json("Company doesnt exist", 422);


        $data = $request->validated();
        $data["password"] = Hash::make($data["password"]);
        $data["remember_token"] = Str::uuid();

        //dd($data);

        User::create($data);
        return response()->json("User created");

    }

    public function update(StoreUserRequest $request, User $user)
    {
        $user->update($request->validated());
        return response()->json("User updated");
    }
}
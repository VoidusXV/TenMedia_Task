<?php

namespace App\Http\Controllers;

use App\Helpers\DatabaseHelper;
use App\Models\Company;
use App\Models\Job;
use App\Http\Requests\StoreJobRequest;
use App\Http\Requests\UpdateJobRequest;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Response;

class JobController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return response()->json("Job Index");

    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreJobRequest $request)
    {
        if (!DatabaseHelper::companyExists($request))
            return response()->json("Company doesnt exist", 422);

        Job::create($request->validated());
        return response()->json("Job created");
    }

}
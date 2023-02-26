<?php

namespace App\Http\Controllers;

use App\Helpers\DatabaseHelper;
use App\Models\Job;
use App\Http\Requests\StoreJobRequest;

class JobController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Job::all();
    }

    public function show(Job $job)
    {
        return $job;
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
    public function update(StoreJobRequest $request, Job $job)
    {
        $job->update($request->validated());
        return response()->json("Job updated");
    }
    public function destroy(Job $job)
    {
        $job->delete();
        return response()->json("Job destroyed");
    }
}
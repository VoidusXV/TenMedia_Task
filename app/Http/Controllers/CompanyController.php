<?php

namespace App\Http\Controllers;

use App\Models\Company;
use App\Http\Requests\StoreCompanyRequest;
use App\Http\Requests\UpdateCompanyRequest;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Response;

class CompanyController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Company::all();

    }
    public function show(Company $Company)
    {
        return $Company;
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreCompanyRequest $request)
    {
        Company::create($request->validated());
        return response()->json("Company created");
    }
    public function update(StoreCompanyRequest $request, Company $company)
    {
        $company->update($request->validated());
        return response()->json("Company updated");
    }
    public function destroy(Company $company)
    {
        $company->delete();
        return response()->json("Company destroyed");
    }
}
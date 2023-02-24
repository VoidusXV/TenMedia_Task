<?php

namespace App\Helpers;

use App\Models\Company;

class DatabaseHelper
{

    public static function companyExists($request)
    {
        $companyID = $request->companyID;
        $companyExist = Company::where('companyID', $companyID)->exists();
        return $companyExist;
    }
}
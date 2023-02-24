<?php

namespace Database\Seeders;

use App\Models\Company;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class CompanySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Company::create([
            "companyID" => 0,
            "name" => "TenMedia",
            "address" => "CompanyAddress",
            "phoneNumber" => "123456789",
            "email" => "Company@Email.com",
        ]);
    }
}
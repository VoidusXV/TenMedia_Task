<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //

        User::create([
            'companyID' => 1,
            'firstname' => "firstnameTest",
            'surname' => "surnameTest",
            'email' => 'email@test1.com',
            'password' => Hash::make('passwordTest')
        ]);
    }
}
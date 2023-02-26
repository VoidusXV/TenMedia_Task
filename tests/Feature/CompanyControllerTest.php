<?php

namespace Tests\Feature;

use App\Models\Company;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class CompanyControllerTest extends TestCase
{
    // use RefreshDatabase;
    public function test_get_request_company(): void
    {
        $company = Company::factory()->create();
        $response = $this->actingAs($company)->get('/api/v1/companies');
        $response->assertStatus(200);
    }

    public function test_post_request_company(): void
    {
        $payload = [
            "name" => "TenMedia2",
            "address" => "CompanyAddress",
            "phoneNumber" => "CompanyPhoneNumber",
            "email" => "CompanyEmail"
        ];

        $company = Company::factory()->create();
        $response = $this->actingAs($company)->post('/api/v1/companies', $payload);
        $response->assertStatus(200);
    }

    public function test_put_request_company(): void
    {
        $payload = [
            "name" => "TenMedia2",
            "address" => "CompanyAddress",
            "phoneNumber" => "CompanyPhoneNumber",
            "email" => "CompanyEmail"
        ];

        $company = Company::factory()->create();
        $response = $this->actingAs($company)->put('/api/v1/companies/1', $payload);
        $response->assertStatus(200);

    }
    public function test_delete_request_company(): void
    {
        $company = Company::factory()->create();
        $response = $this->actingAs($company)->delete('/api/v1/companies/1');
        $response->assertStatus(200);
    }
}
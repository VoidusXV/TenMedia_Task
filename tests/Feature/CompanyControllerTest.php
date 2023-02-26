<?php

namespace Tests\Feature;

use App\Models\Company;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class CompanyControllerTest extends TestCase
{
    use RefreshDatabase;
    public function test_get_request_company(): void
    {
        $company = Company::factory()->create();
        $response = $this->actingAs($company)->get('/api/v1/companies');
        $response->assertStatus(200);
    }
}
<?php

namespace Tests\Feature;

use App\Models\Job;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class JobControllerTest extends TestCase
{
    use RefreshDatabase;
    public function test_get_request_jobs(): void
    {
        $job = Job::factory()->create();
        $response = $this->actingAs($job)->get('/api/v1/jobs');
        $response->assertStatus(200);
    }
    public function test_post_request_jobs(): void
    {
        $payload = [
            "companyID" => 1,
            "title" => "JobTitle1",
            "salary" => 12356,
            "description" => "TestDescription",
            "location" => "Berlin"
        ];

        $user = Job::factory()->create();
        $response = $this->actingAs($user)->post('/api/v1/jobs', $payload);
        $response->assertStatus(200);
    }

    public function test_put_request_jobs(): void
    {

        $payload = [
            "companyID" => 1,
            "title" => "JobTitle1",
            "salary" => 12356,
            "description" => "TestDescription",
            "location" => "Berlin"
        ];

        $job = Job::factory()->create();
        $response = $this->actingAs($job)->put('/api/v1/jobs/1', $payload);
        $response->assertStatus(200);

    }

    public function test_delete_request_jobs(): void
    {
        $job = Job::factory()->create();
        $response = $this->actingAs($job)->delete('/api/v1/jobs/1');
        $response->assertStatus(200);
    }
}
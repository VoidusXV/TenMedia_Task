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
}
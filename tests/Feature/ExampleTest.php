<?php

namespace Tests\Feature;

// use Illuminate\Foundation\Testing\RefreshDatabase;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class ExampleTest extends TestCase
{
    use RefreshDatabase;
    /**
     * A basic test example.
     */
    public function test_the_application_returns_a_successful_response(): void
    {
        $response = $this->get('/');
        $response->assertStatus(404);
    }
// public function test_get_request_job(): void
// {
//     $user = User::factory()->create();

//     $response = $this->actingAs($user)->get('/api/v1/users');

//     $response->assertStatus(200);
// }

}
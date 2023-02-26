<?php

namespace Tests\Feature;

use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class UserControllerTest extends TestCase
{
    use RefreshDatabase;
    public function test_get_request_user(): void
    {
        $user = User::factory()->create();
        $response = $this->actingAs($user)->get('/api/v1/users');
        $response->assertStatus(200);
    }
}
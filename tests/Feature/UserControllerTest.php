<?php

namespace Tests\Feature;

use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class UserControllerTest extends TestCase
{
    //  use RefreshDatabase;
    public function test_get_request_user(): void
    {
        $user = User::factory()->create();
        $response = $this->actingAs($user)->get('/api/v1/users');
        $response->assertStatus(200);
    }

    public function test_post_request_user(): void
    {
        $payload = [
            "companyID" => 1,
            "firstname" => "firstnameTest",
            "surname" => "surnameTest",
            "email" => "emailTest",
            "password" => "passwordTest",
        ];

        $user = User::factory()->create();
        $response = $this->actingAs($user)->post('/api/v1/users', $payload);
        $response->assertStatus(200);
    }

    public function test_put_request_user(): void
    {

        $payload = [
            "companyID" => 1,
            "firstname" => "testing",
            "surname" => "surnameTest",
            "email" => "email@test1.com",
            "password" => "$2y$10$8zIxkxLPMJZbFcgpw9BcBeQhhNiprNthT6HbPkd9OOBpJpTlfeYMy"
        ];

        $user = User::factory()->create();
        $response = $this->actingAs($user)->put('/api/v1/users/1', $payload);
        $response->assertStatus(200);

    }

    public function test_delete_request_user(): void
    {
        $user = User::factory()->create();
        $response = $this->actingAs($user)->delete('/api/v1/users/1');
        $response->assertStatus(200);
    }
}
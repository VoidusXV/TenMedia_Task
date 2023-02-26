<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Date;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('users', function (Blueprint $table) {
            $table->integer("userID", true);
            $table->integer("companyID")->default(1);
            $table->string("firstname")->default("TestName");
            $table->string("surname")->default("TestNachname");
            $table->string("email")->default("Test@email.com");
            $table->string("password")->default("TestPassword");
            $table->string("created_at")->default("2023-02-26T17:52:57+0000");
            $table->string("updated_at")->default("2023-02-26T17:52:57+0000");
            $table->rememberToken();

        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('users');
    }
};
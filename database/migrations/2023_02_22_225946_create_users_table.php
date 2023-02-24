<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    /**
     * Run the migrations.
     */
    //TODO: Create table for users here
    public function up(): void
    {
        Schema::create('users', function (Blueprint $table) {
            $table->integer("userID", true);
            $table->integer("companyID");
            $table->string("firstname");
            $table->string("surname");
            $table->string("email");
            $table->string("password");
            $table->string("created_at");
            $table->string("updated_at");
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
<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('jobs', function (Blueprint $table) {

            $table->integer("jobID", true);
            $table->string("companyID")->default("1");
            $table->string("title")->default("Anwendungsentwickler");
            $table->integer("salary")->default(900);
            $table->string("description")->default("Description Default");
            $table->string("location")->default("Berlin");

        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('jobs');
    }
};
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
        Schema::create('companies', function (Blueprint $table) {
            $table->integer("companyID", true);
            $table->string("name")->default("CompanyName");
            $table->string("address")->default("CompanyAddress");
            $table->string("phoneNumber")->default("01761234567");
            $table->string("email")->default("test@email.com");
            ;
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('companies');
    }
};
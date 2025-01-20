<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::table('education', function (Blueprint $table) {
            // Check if the 'is_featured' column doesn't exists before attempting to add it
            if (!Schema::hasColumn('education', 'is_featured')) {
                // Add the column `is_feature` to the `blog` table
                $table->boolean('is_featured')->nullable()->default(0);
            }
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('education', function (Blueprint $table) {
            // Check if the 'is_featured' column exists before attempting to drop it
            if (Schema::hasColumn('education', 'is_featured')) {
                // Drop the column `is_featured` from the `blog` table when rolling back
                $table->dropColumn('is_featured');
            }
        });
    }
};

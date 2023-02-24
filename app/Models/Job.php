<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Job extends Model
{
    use HasFactory;
    protected $fillable = ["jobID", 'companyID', 'title', 'salary', 'description', 'location'];
    public $timestamps = false;
}
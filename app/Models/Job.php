<?php

namespace App\Models;

use Illuminate\Auth\Authenticatable;
use Illuminate\Contracts\Auth\Authenticatable as AuthenticatableContract;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Job extends Model implements AuthenticatableContract
{
    use HasFactory, Authenticatable;

    protected $fillable = ["jobID", 'companyID', 'title', 'salary', 'description', 'location'];
    public $timestamps = false;
    protected $primaryKey = 'jobID';

}
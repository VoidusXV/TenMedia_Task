<?php

namespace App\Models;

use Illuminate\Auth\Authenticatable;
use Illuminate\Contracts\Auth\Authenticatable as AuthenticatableContract;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Company extends Model implements AuthenticatableContract
{
    use HasFactory, Authenticatable;
    protected $fillable = ["companyID", 'name', 'address', 'phoneNumber', 'email'];
    public $timestamps = false;
    protected $primaryKey = 'companyID';


}
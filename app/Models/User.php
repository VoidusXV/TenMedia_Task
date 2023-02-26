<?php

namespace App\Models;

use Illuminate\Auth\Authenticatable;
use Illuminate\Contracts\Auth\Authenticatable as AuthenticatableContract;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;

class User extends Model implements AuthenticatableContract
{
    use HasFactory, Authenticatable;

    protected $fillable = ['userID', "companyID", 'firstname', 'surname', 'email', 'password', 'created_at', 'updated_at', 'remember_token'];
    protected $table = 'users';
    protected $primaryKey = 'userID';

}
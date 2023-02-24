<?php

use App\Models\User;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

// Route::get('/', function () {
//     return view('welcome');
// });
Route::get('/hello', function () {
    return "test";
});

Route::post('/login', function (Request $request) {

    $credentials = $request->only('email', 'password');
    if (Auth::attempt($credentials, true)) {
        $user = Auth::user();
        return response()->json(['success' => true, 'user' => $user]);

    } else {
        return response()->json(['success' => false, 'message' => 'Invalid credentials']);
    }
});
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

Route::post("/login", function (Request $request) {

    //"remember_token": "5883b61c-046c-4320-a711-365d48b08582"
    //"email": "email@test1.com",
    //"password": "passwordTest"

    $email = $request["email"] ?? null;
    $password = $request["password"] ?? null;
    $credentials_login = $email != null && $password != null && Auth::guard()->attempt($request->only("email", "password"));

    if ($credentials_login) {
        $request->session()->regenerate();
        $user = Auth::User();
        return response()->json(['success' => true, 'user' => $user]);

    }
    return response()->json(['success' => false, 'message' => 'Invalid credentials']);

});

Route::post("/getUserByUuid", function (Request $request) {

    $token = $request["remember_token"] ?? null;
    $UserAuth = User::where('remember_token', $token)->first();
    // $token_auth = $UserAuth != null && Auth::loginUsingId($UserAuth->userID);

    if ($UserAuth) {
        //$user = Auth::User();
        return response()->json(['success' => true, 'user' => $UserAuth]);

    }
    return response()->json(['success' => false, 'message' => 'Invalid credentials']);
});
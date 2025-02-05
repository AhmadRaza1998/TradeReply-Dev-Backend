<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Http\Requests\AuthRequest;
use App\Http\Services\AuthServices;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{
    //

    // protected $authServices;
    protected $user;

    public function __construct(AuthServices $authServices)
    {
        // $this->authServices = $authServices;
        $this->user = new User();
    }


    public function register(Request $request)
    {
//        $data = $request->validate([
//            'name' => 'required|string|max:255',
//            'email' => 'required|email|unique:users',
//            'password' => 'required|min:6|confirmed',
//        ]);

        // return $this->authServices->register($request->validated());

        $user = $this->user::create([
            'name' => $request->email,
            'email' => $request->email,
            'password' => Hash::make($request->password),
        ]);

        // Auth::login($user);
        // $request->session()->regenerate();

        return response()->json([
            'user' => $user,
            'message' => 'User created successfully'
        ]);
    }

    public function login(Request $request)
    {
        $credentials = $request->validate([
            'email' => 'required|email',
            'password' => 'required'
        ]);

        if (Auth::attempt($credentials)) {
            $request->session()->regenerate();
            return response()->json(Auth::user());
        }

        return response()->json(['message' => 'Invalid credentials'], 401);
    }

    public function logout(Request $request)
    {
        Auth::logout();
        $request->session()->invalidate();
        $request->session()->regenerateToken();
        return response()->json(['message' => 'Logged out']);
    }
}

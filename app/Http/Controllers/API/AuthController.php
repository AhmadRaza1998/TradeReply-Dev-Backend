<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Http\Requests\AuthRequest;
use App\Http\Services\AuthServices;
use App\Models\User;
use Illuminate\Auth\Events\Registered;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Password;

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


    public function store(Request $request)
    {
        try {

            $request->validate([
                'email' => 'required|string|email|max:255|unique:users,email',
                'password' => 'required|min:8',
            ]);


            $user = User::create([
                'email' => $request->email,
                'password' => Hash::make($request->password),
            ]);

            // Trigger the Registered event
            event(new Registered($user));


            return response()->json([
                'success' => true,
                'message' => "User Registered Successfully",
                'data' => $user,
            ], 201);
        } catch (\Exception $e) {

            return response()->json([
                'success' => false,
                'message' => 'An error occurred while processing your request.',
                'error' => $e->getMessage(),
            ], 500);
        }
    }

    public function login(Request $request)
    {
        $credentials = $request->validate([
            'email' => 'required|email',
            'password' => 'required'
        ]);

        if (!Auth::attempt($credentials)) {
            return response()->json([
                'success' => false,
                'message' => 'Invalid credentials'
            ], 401);
        }

        // Regenerate session to prevent session fixation attacks
        $request->session()->regenerate();

        return response()->json([
            'success' => true,
            'message' => 'Login successful',
            'user' => Auth::user()
        ]);
    }


    public function logout(Request $request)
    {
        Auth::logout();
        $request->session()->invalidate();
        $request->session()->regenerateToken();
        return response()->json(['message' => 'Logged out']);
    }

    public function forget_password(Request $request)
    {
        $request->validate([
            'email' => 'required|string|email|max:255|exists:users,email',
        ]);

        $user = User::where('email', $request->email)->first();
        $token = Password::createToken($user);

        event(new ForgotPasswordEvent($user, $token));

        return response()->json(['message' => 'Password reset email sent.']);
    }
}

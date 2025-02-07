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


    public function register(Request $request)
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

        // Find user manually
        $user = User::where('email', $request->email)->first();

        // Check if user exists and password is correct
        if (!$user || !Hash::check($request->password, $user->password)) {
            return response()->json([
                'success' => false,
                'message' => 'Invalid credentials'
            ], 401);
        }


        $token = $user->createToken('API Token')->plainTextToken;
        return response()->json([
            'success' => true,
            'message' => 'API login successful',
            'token' => $token,
            'user' => $user
        ]);
    }

    public function logout(Request $request)
    {
        $request->user()->tokens()->delete();
        return response()->json(['message' => 'API tokens revoked']);
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

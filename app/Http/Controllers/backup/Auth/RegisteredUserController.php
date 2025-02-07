<?php

namespace App\Http\Controllers\backup\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Auth\Events\Registered;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class RegisteredUserController extends Controller
{
    /**
     * Display the registration view.
     */
//    public function create(): Response
//    {
//        return Inertia::render('Auth/Register');
//    }

    /**
     * Handle an incoming registration request.
     *
     * @throws \Illuminate\Validation\ValidationException
     */
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

}

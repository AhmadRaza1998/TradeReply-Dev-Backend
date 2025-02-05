<?php 

namespace App\Http\Services;

use App\Models\User;
use Illuminate\Support\Facades\Hash;

class AuthServices 
{
    public function register(array $data)
    {
        $user = User::create([
            'name' => $data['email'],
            'email' => $data['email'],
            'password' => Hash::make($data['password']),
        ]);
    }
}
<?php

use App\Http\Controllers\{
    AccountController,
    BlogController,
    EducationController,
    CategoryController
};
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Dashboard\{
    TradeManagerController,
    StrategyManagerController
};

use Inertia\Inertia;
Route::middleware(['auth' , 'admin'])->group(function () {
    
    Route::prefix('dashboard')->group(function () {
        Route::resource('/education-manager', EducationController::class)->parameters([
            'education-manager' => 'education:id'
        ]);
        Route::resource('/blog-manager', BlogController::class)->parameters([
            'blog-manager' => 'blog:id'
        ]);
        Route::resource('/category-manager', CategoryController::class)->parameters([
            'category-manager' => 'category:id'
        ]);
    });
});
Route::middleware(['auth', 'verified'])->group(function () {
    
    // Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    // Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
    Route::controller(AccountController::class)->prefix('account')->group(function () {
        Route::get('/', 'overview')->name('account.overview');
        Route::get('/details', 'details')->name('account.details');
        Route::get('/subscriptions', 'subscriptions')->name('account.subscriptions');
        Route::get('/security', 'security')->name('account.security');
        Route::get('/privacy', 'privacy')->name('account.privacy');
        Route::get('/connections', 'connections')->name('account.connections');
        Route::get('/payments', 'payments')->name('account.payments');
        Route::get('/transactions', 'transactions')->name('account.transactions');
    });
    Route::prefix('dashboard')->group(function () {
        Route::get('/', function () {
            return Inertia::render('Dashboard');
        })->name('dashboard');
        Route::resource('/trade-manager', TradeManagerController::class)->except(['create', 'edit']);
        Route::resource('/trade-builder', TradeManagerController::class)->only(['create', 'edit']); // Custom URL for "create"
    
        Route::resource('/strategy-manager', StrategyManagerController::class)->except(['create', 'edit']);
        Route::resource('/strategy-builder', StrategyManagerController::class)->only(['create', 'edit']); // Custom URL for "create"
    
    });
});


// Auth Routes
require __DIR__ . '/auth.php';
require __DIR__ . '/public.php';

<?php

use App\Http\Controllers\{
    PagesController,
    BlogController,
    EducationController,
    CategoryController
};
use Illuminate\Support\Facades\Route;

Route::controller(PagesController::class)->group(function () {
    Route::get('/', 'home')->name('page.home');
    Route::get('/market', 'market')->name('page.market');
    Route::get('/pricing','pricing')->name('page.pricing');
    Route::get('/features','features')->name('page.featuress');
    Route::get('/terms','terms')->name('page.terms');
    Route::get('/privacy','privacy')->name('page.privacy');
    Route::get('/disclaimer','disclaimer')->name('page.disclaimer');
    Route::get('/cookies','cookies')->name('page.cookies');
    Route::get('/brand-assets','brandAssets')->name('page.brandAssets');
    Route::get('/accessibility','accessibility')->name('page.accessibility');
    Route::get('/advertising','advertising')->name('page.advertising');
    Route::get('/brokers','brokers')->name('page.brokers');
    Route::get('/status','status')->name('page.status');
    Route::get('/sitemap','sitemap')->name('page.sitemap');
    Route::get('/partner','partner')->name('page.partner');
    Route::get('/refer-a-friend','refer')->name('page.refer');
    Route::get('/category','category')->name('page.category');
    Route::get('/partner-rules','partnerRules')->name('page.partnerRules');
    Route::get('/trading-calculator','trading_calculator')->name('page.trading-calculator');
});

Route::controller(BlogController::class)->prefix('blog')->group(function () {
    Route::get('/', 'front_view')->name('blog.index');
    Route::get('/{slug}', 'front_single_view')->name('blog.show');
});

Route::controller(EducationController::class)->prefix('education')->group(function () {
    Route::get('/', 'front_view')->name('education.index');
    Route::get('/{slug}', 'front_single_view')->name('education.show');
});

Route::controller(CategoryController::class)->prefix('category')->group(function () {
    Route::get('/', 'front_view')->name('category.index');
    Route::get('/{slug}', 'front_single_view')->name('category.show');
});
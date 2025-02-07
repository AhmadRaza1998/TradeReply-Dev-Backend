<?php

namespace App\Http\Controllers;

use App\Models\Category;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Route;
use App\Http\Requests\CategoryRequest;

class CategoryController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
        $categories = Category::orderBy('created_at', 'desc')->paginate(10);
        return Inertia::render('Dashboard/Category/Index', [
            'categories' => $categories
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Dashboard/Category/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(CategoryRequest $request)
    {
        $slug = Category::generateUniqueSlug($request->input('title'));

        Category::create([
            'title' => $request->input('title'),
            'content' => $request->input('content'),
            'slug' => $slug
        ]);

        return redirect()->route('category-manager.index')->with('success', 'Category added successfully.');
    }

    /**
     * Display the specified resource.
     */
    public function show(Category $category)
    {
        return Inertia::render('Dashboard/Category/Show', [
            'category' => $category
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Category $category)
    {
        return Inertia::render('Dashboard/Category/Edit', [
            'category' => $category
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(CategoryRequest $request, Category $category)
    {

        // Update the post details
        $category->title = $request->input('title');
        $category->content = $request->input('content');

        $category->save();
        return redirect()->route('category-manager.index')->with('success', 'Category updated successfully.');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Category $blog)
    {
        $blog->delete();

        return redirect()->route('category-manager.index')->with('success', 'Category removed successfully.');
    }

    public function front_view(){
        $categories = Category::orderBy('created_at', 'desc')->paginate(3);
        return Inertia::render('Home/Blog/Index', [
            'categories' => $categories,
            'canLogin' => Route::has('login'),
            'canRegister' => Route::has('register'),
        ]);
    }

    public function front_single_view(Category $category){
        return Inertia::render('Home/Blog/Detail', [
            'category' => $category,
            'canLogin' => Route::has('login'),
            'canRegister' => Route::has('register'),
        ]);
    }
}

<?php

namespace App\Http\Controllers;

use App\Models\Blog;
use App\Http\Requests\BlogRequest;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Models\Category;

class BlogController extends Controller
{

    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
        $blogs = Blog::orderBy('created_at', 'desc')->paginate(10);
        return Inertia::render('Dashboard/Blogs/Index', [
            'blogs' => $blogs
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $categories = Category::all();
        return Inertia::render('Dashboard/Blogs/Create',[
            'categories'=>$categories
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(BlogRequest $request)
    {

        $slug = Blog::generateUniqueSlug($request->input('title'));

        $blog = Blog::create([
            'title' => $request->input('title'),
            'content' => $request->input('content'),
            'slug' => $slug,
            'is_featured' => $request->has('is_feature') ? 1 : 0,
            'primary_category_id ' => $request->has('primary_category_id '),
            'feature_image' => $request->file('feature_image'),
            'tags' => $request->input('tags'),
        ]);
        if (!empty($validatedData['categories'])) {
            $blog->categories()->attach($request->has('categories'));
        }

        return redirect()->route('blog-manager.index')->with('success', 'Blog added successfully.');
    }

    /**
     * Display the specified resource.
     */
    public function show(Blog $blog)
    {
        return Inertia::render('Dashboard/Blogs/Show', [
            'blog' => $blog,
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Blog $blog)
    {
        $categories = Category::all();
        return Inertia::render('Dashboard/Blogs/Edit', [
            'blog' => $blog,
            'categories'=>$categories
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(BlogRequest $request, Blog $blog)
    {

        // Update the post details
        $blog->title = $request->input('title');
        $blog->content = $request->input('content');
        $blog->tags = $request->input('tags');
        $blog->is_featured = $request->has('is_feature') ? 1 : 0;
        $blog->primary_category_id = $request->has('primary_category_id ');
        if ($request->hasFile('feature_image')) {
            $blog->feature_image = $request->file('feature_image');
        }
        $blog->save();
        if (!empty($request->has('categories'))) {
            // Sync categories: attach new ones, detach old ones not selected
            $blog->categories()->sync($request->has('categories'));
        } else {
            // If no categories are selected, detach all categories
            $blog->categories()->detach();
        }
        return redirect()->route('blog-manager.index')->with('success', 'Blog updated successfully.');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Blog $blog)
    {
        $blog->delete();

        return redirect()->route('blog-manager.index')->with('success', 'Blog removed successfully.');
    }

    public function front_view(){
        $blogs = Blog::orderBy('created_at', 'desc')->paginate(3);
        $featuredBlogs = Blog::where('is_featured', true)
                         ->orderBy('created_at', 'desc')
                         ->take(3)
                         ->get();
        return Inertia::render('Home/Blog/Index', [
            'blogs' => $blogs,
            'featured_blogs' => $featuredBlogs,
            'canLogin' => Route::has('login'),
            'canRegister' => Route::has('register'),
        ]);
    }

    public function front_single_view(Blog $blog){
        return Inertia::render('Home/Blog/Detail', [
            'blog' => $blog,
            'canLogin' => Route::has('login'),
            'canRegister' => Route::has('register'),
        ]);
    }
}

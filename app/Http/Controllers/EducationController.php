<?php

namespace App\Http\Controllers;

use App\Models\Education;
use App\Http\Requests\EducationRequest;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Models\Category;

class EducationController extends Controller
{

    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
        $educations = Education::orderBy('created_at', 'desc')->paginate(10);
        return Inertia::render('Dashboard/Educations/Index', [
            'educations' => $educations
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $categories = Category::all();
        return Inertia::render('Dashboard/Educations/Create',[
            'categories'=>$categories
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(EducationRequest $request)
    {
        $slug = Education::generateUniqueSlug($request->input('title'));

        Education::create([
            'title' => $request->input('title'),
            'content' => $request->input('content'),
            'slug' => $slug,
            'is_featured' => $request->has('is_feature') ? 1 : 0,
            'feature_image' => $request->file('feature_image'),
            'tags' => $request->input('tags'),
        ]);

        return redirect()->route('blog-manager.index')->with('success', 'Blog added successfully.');
    }

    /**
     * Display the specified resource.
     */
    public function show(Education $education)
    {
        return Inertia::render('Dashboard/Educations/Show', [
            'education' => $education
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Education $education)
    {
        $categories = Category::all();
        return Inertia::render('Dashboard/Educations/Edit', [
            'education' => $education,
            'categories'=>$categories
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(EducationRequest $request, Education $education)
    {

        // Update the post details
        $education->title = $request->input('title');
        $education->content = $request->input('content');
        $education->tags = $request->input('tags');
        $education->is_featured = $request->has('is_feature') ? 1 : 0;
        if ($request->hasFile('feature_image')) {
            $education->feature_image = $request->file('feature_image');
        }
        $education->save();
        return redirect()->route('blog-manager.index')->with('success', 'Blog updated successfully.');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Education $education)
    {
        $education->delete();

        return redirect()->route('education-manager.index')->with('success', 'Education removed successfully.');
    }

    public function front_view(){
        $educations = Education::orderBy('created_at', 'desc')->paginate(3);
        $featuredEducations = Education::where('is_featured', true)
                         ->orderBy('created_at', 'desc')
                         ->take(3)
                         ->get();
        return Inertia::render('Home/Education/index', [
            'educations' => $educations,
            'featured_educations' => $featuredEducations,
            'canLogin' => Route::has('login'),
            'canRegister' => Route::has('register'),
        ]);
    }

    public function front_single_view(Education $education){
        return Inertia::render('Home/Education/detail', [
            'education' => $education,
            'canLogin' => Route::has('login'),
            'canRegister' => Route::has('register'),
        ]);
    }
}

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
        $educations = Education::with(['primaryCategory:id,title'])
            ->orderBy('title', 'asc')
            ->paginate(25);

        $educations->getCollection()->transform(function ($education) {
            $education->summary = mb_strimwidth($education->summary, 0, 250, '...');
            return $education;
        });

        return response()->json([
            'success' => true,
            'message' => 'education data',
            'data' => $educations,
        ]);


    }

    /**
     * Show the form for creating a new resource.
     */
    public function create(Request $request)
    {
        $request->validate([
            'file' => 'required|file|mimes:csv,txt'
        ]);

        $file = $request->file('file');

        // Read the file content directly without storing
        $educationRecords = Education::importFromCsv($file);

        return response()->json([
            'message' => 'Education Records Imported Successfully',
            'imported_records' => $educationRecords
        ]);
    }



    /**
     * Store a newly created resource in storage.
     */
    public function store(EducationRequest $request)
    {
        $education = Education::create([$request->all()]);

        return response()->json([
            'success' => true,
            'message' => 'education data',
            'data' => $education,
        ]);
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
        $data = [
            'title' => $request->input('title'),
            'content' => $request->input('content'),
            'is_featured' => $request->has('is_featured') ? 1 : 0,
            'tags' => $request->input('tags'),
        ];

        $education->update($data);

        return response()->json([
            'success' => true,
            'message' => 'Education data updated successfully',
            'data' => $education,
        ]);
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
    /**
     * Filters education records based on request parameters.
     *
     * @param \Illuminate\Http\Request $request The request containing filter parameters.
     * @return \Illuminate\Http\JsonResponse The filtered education records.
     */
    public function filter(Request $request)
    {
        $filterType = $request->input('filter');
        $filterValue = $request->input('value');

        if ($filterType == 'tags' && !empty($filterValue)) {
            $educations = Education::with(['primaryCategory:id,title'])
                ->where('tags', $filterValue)
                ->orderBy('title', 'asc')
                ->paginate(25);

            $educations->getCollection()->transform(function ($education) {
                $education->summary = mb_strimwidth($education->summary, 0, 250, '...');
                return $education;
            });

            return response()->json([
                'success' => true,
                'message' => 'Education data retrieved successfully',
                'data' => $educations,
            ]);
        }

        return response()->json([
            'success' => false,
            'message' => 'Invalid filter type or missing value.',
            'data' => [],
        ], 400);
    }


}

<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Storage;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use APP\Traits\CsvImporterTrait;
class Education extends Model
{
    use CsvImporterTrait;
    protected $fillable = ['title', 'content', 'slug', 'feature_image', 'tags','primary_category_id','is_featured'];

    protected static function boot()
    {
        parent::boot();

        static::deleting(function ($education) {
            //if ($post->feature_image && $post->forceDeleting) {
            if ($education->feature_image) {
                // Delete the image from storage/app/public
                if (Storage::disk('public')->exists($education->feature_image)) {
                    Storage::disk('public')->delete($education->feature_image);
                }
            }
        });

        static::creating(function ($education) {
            if ($education->title) {
                $education->slug = self::generateUniqueSlug($education->title);
            }
            if (request()->hasFile('feature_image')) {
                $education->feature_image = self::uploadFeatureImage(request()->file('feature_image'));
            }
        });

        static::updating(function ($education) {
            if (request()->hasFile('feature_image')) {
                $oldImage = $education->getOriginal('feature_image');

                $education->feature_image = self::uploadFeatureImage(request()->file('feature_image'));

                if ($oldImage && Storage::disk('public')->exists($oldImage)) {
                    Storage::disk('public')->delete($oldImage);
                }
            }
        });
    }

    /**
     * Generate a unique slug based on the title.
     *
     * @param string $title
     * @return string
     */
    public static function generateUniqueSlug($title)
    {
        $slug = Str::slug($title);
        $originalSlug = $slug;
        $count = 1;

        while (self::where('slug', $slug)->exists()) {
            $slug = "{$originalSlug}-{$count}";
            $count++;
        }

        return $slug;
    }

    public static function uploadFeatureImage($file)
    {
        return $file->store('uploads/feature_images', 'public');
    }
    public function setTagsAttribute($value)
    {
        $this->attributes['tags'] = is_array($value) ? implode(',', $value) : $value;
    }

    public function getTagsAttribute($value)
    {
        return explode(',', $value);
    }

    public function getFeatureImageAttribute($value)
    {
        return !empty($value) ? Storage::url($value) : null;
    }

    public function setFeatureImageAttribute($value)
    {
        // Only handle file upload if a file is provided

        if (is_file($value)) {
            $fileName = $this->slug . '-' . time() . '.' . $value->getClientOriginalExtension();

            // Store the image in 'public/blog/{slug}/' folder
            $path = $value->storeAs('education', $fileName);

            $this->attributes['feature_image'] = $path;
        }
    }

    public function primaryCategory(): BelongsTo
    {
        return $this->belongsTo(Category::class, 'primary_category_id');
    }

    /**
     * Categories relationship (many-to-many).
     */
    public function categories(): BelongsToMany
    {
        return $this->belongsToMany(Category::class, 'blog_category');
    }


    /**
     * Import Education records from CSV
     *
     * @param string $filePath
     * @param array $mapping (CSV header to DB column mapping)
     * @return array
     * @throws Exception
     */
    public static function importFromCsv(string $file, array $mapping = [])
    {
        try {
            $educationInstance = new self();

            $records = $educationInstance->importCsv($file, $educationInstance->getFillable(), $mapping);

            $importedRecords = [];

            foreach ($records as $educationData) {
                $education = self::create((array)$educationData);
                $importedRecords[] = $education;
            }

            return $importedRecords;
        } catch (Exception $e) {
            throw new Exception("Error importing education records: " . $e->getMessage());
        }
    }

}

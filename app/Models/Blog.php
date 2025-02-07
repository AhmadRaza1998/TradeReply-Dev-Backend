<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Storage;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class Blog extends Model
{
    protected $fillable = ['title', 'content', 'slug', 'feature_image', 'tags'];

    protected static function boot()
    {
        parent::boot();

        static::deleting(function ($blog) {
            //if ($post->feature_image && $post->forceDeleting) {
            if ($blog->feature_image) {
                // Delete the image from storage/app/public
                if (Storage::disk('public')->exists($blog->feature_image)) {
                    Storage::disk('public')->delete($blog->feature_image);
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

            if (!empty($this->feature_image) && Storage::disk('public')->exists($this->feature_image)) {
                Storage::disk('public')->delete($this->feature_image);
            }
            
            $fileName = $this->slug . '-' . time() . '.' . $value->extension();
            // Store the image in 'blog' folder
            $path = $value->storeAs('blog', $fileName,'public');

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
}

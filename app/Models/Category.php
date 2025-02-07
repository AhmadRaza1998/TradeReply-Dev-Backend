<?php

namespace App\Models;
use Illuminate\Support\Str;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Model;

class Category extends Model
{

    protected $fillable = ['title', 'content', 'slug'];
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

     /**
     * Blogs relationship (many-to-many).
     */
    public function blogs(): BelongsToMany
    {
        return $this->belongsToMany(Blog::class, 'blog_category');
    }

    /**
     * Primary blogs relationship (one-to-many).
     */
    public function primaryBlogs(): HasMany
    {
        return $this->hasMany(Blog::class, 'primary_category_id');
    }
}

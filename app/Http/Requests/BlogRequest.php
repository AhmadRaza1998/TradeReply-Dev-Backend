<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class BlogRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'title' => 'required|string|max:255',
            'content' => 'required|string|min:50',
            'is_featured' => 'nullable|boolean',
            'image' => 'nullable|image|mimes:jpg,jpeg,png|max:2048',
            'primary_category_id' => 'nullable|exists:categories,id',
            'categories' => 'nullable|array',
            'categories.*' => 'nullable|exists:categories,id',
        ];
    }

    /**
     * Custom error messages.
     *
     * @return array
     */
    public function messages()
    {
        return [
            'title.required' => 'The blog title is required.',
            'content.required' => 'The blog content is required.',
            'content.min' => 'The blog content must be at least 50 characters.',
            'image.image' => 'The uploaded file must be an image.',
            'image.mimes' => 'Only JPG, JPEG, and PNG images are allowed.',
            'image.max' => 'The image size must not exceed 2MB.',
            'primary_category_id.exists' => "Selected Category no longer exisits",
            'categories.exists' => "Selected Category no longer exisits",
        ];
    }
}

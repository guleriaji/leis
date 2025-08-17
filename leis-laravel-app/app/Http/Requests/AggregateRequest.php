<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class AggregateRequest extends FormRequest
{
    public function authorize()
    {
        return true;
    }

    public function rules()
    {
        return [
            'services' => 'required|array|min:1',
            'services.*' => 'in:github,weather,catfact,chuck',
            'params' => 'nullable|array'
        ];
    }
}

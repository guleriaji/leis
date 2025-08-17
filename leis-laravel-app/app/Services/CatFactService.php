<?php

namespace App\Services;

use Illuminate\Support\Facades\Http;

class CatFactService
{
    public function fetch(array $params)
    {
        return cache()->remember("catfact", 300, function () {
            $response = Http::get("https://catfact.ninja/fact");
            return $response->json();
        });
    }
}

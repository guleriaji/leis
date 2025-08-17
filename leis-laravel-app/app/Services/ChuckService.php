<?php

namespace App\Services;

use Illuminate\Support\Facades\Http;

class ChuckService
{
    public function fetch(array $params)
    {
        return cache()->remember("chuck_joke", 300, function () {
            $response = Http::get("https://api.chucknorris.io/jokes/random");
            return $response->json();
        });
    }
}

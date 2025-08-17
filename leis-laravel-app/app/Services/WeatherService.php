<?php

namespace App\Services;

use Illuminate\Support\Facades\Http;

class WeatherService
{
    public function fetch(array $params)
    {
        $lat = $params['latitude'] ?? '32.7476652';
        $lon = $params['longitude'] ?? '74.8617728';
        $url = "https://api.open-meteo.com/v1/forecast?latitude={$lat}&longitude={$lon}&hourly=temperature_2m";

        return cache()->remember("weather_{$lat}_{$lon}", 300, function () use ($url) {
            $response = Http::get($url);
            return $response->json();
        });
    }
}

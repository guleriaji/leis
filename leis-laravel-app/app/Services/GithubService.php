<?php

namespace App\Services;

use Illuminate\Support\Facades\Http;

class GithubService
{
    public function fetch(array $params)
    {
        $username = $params['username'] ?? null;
        if (!$username) {
            return ['error' => 'Username is required for github'];
        }

        $url = "https://api.github.com/users/{$username}";
        
        return cache()->remember("github_{$username}", 300, function () use ($url) {
            $response = Http::get($url);
            return $response->json();
        });
    }
}

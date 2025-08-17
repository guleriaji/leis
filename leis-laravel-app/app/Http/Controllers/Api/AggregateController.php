<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\AggregateRequest;
use App\Services\GithubService;
use App\Services\WeatherService;
use App\Services\CatFactService;
use App\Services\ChuckService;

class AggregateController extends Controller
{
    protected $services;

    public function __construct(
        GithubService $github,
        WeatherService $weather,
        CatFactService $catfact,
        ChuckService $chuck
    ) {
        $this->services = [
            'github' => $github,
            'weather' => $weather,
            'catfact' => $catfact,
            'chuck' => $chuck
        ];
    }

    public function aggregate(AggregateRequest $request)
    {
        $services = $request->input('services');
        $params = $request->input('params', []);

        $results = [];
        foreach ($services as $service) {
            $results[$service] = $this->services[$service]->fetch($params[$service] ?? []);
        }

        return response()->json([
            'status' => 'success',
            'data' => $results
        ]);
    }

   

}

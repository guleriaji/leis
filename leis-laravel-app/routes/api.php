<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\AggregateController;

Route::get('/ping', function () {
    return response()->json(['message' => 'pong']);
});

Route::post('/v1/aggregate', [AggregateController::class, 'aggregate']);

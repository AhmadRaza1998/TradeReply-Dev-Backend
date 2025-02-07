<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::get('youtubeURL',function ()
{
    $url = 'https://www.youtube.com/watch?v=BJatgOiiht4';
    if (str_contains($url, 'youtube.com') || str_contains($url, 'youtu.be') || str_contains($url, 'm.youtube.com')) {
        parse_str(parse_url($url, PHP_URL_QUERY), $queryParams);
        $videoId = (is_array($queryParams) && isset($queryParams['v'])) ? $queryParams['v'] : null;
        if (!$videoId) {
            return null;
        }
        $thumbnailUrl = "https://img.youtube.com/vi/{$videoId}/hqdefault.jpg";
        // Fetch video details from oEmbed API
        $apiUrl = "https://www.youtube.com/oembed?url=https://www.youtube.com/watch?v={$videoId}&format=json";
        try {
            $client = new \GuzzleHttp\Client();
            $response = $client->get($apiUrl);
            $videoData = json_decode($response->getBody(), true);
            return [
                'full response' => $videoData,
                'author_name' => $videoData['author_name'] ?? null, // YouTube oEmbed doesn't provide full description
                'thumbnail' => $thumbnailUrl,
            ];
        } catch (\Exception $e) {
            return null;
        }
    }
    return null;
});

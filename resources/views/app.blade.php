<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
		<title inertia>{{ config('app.name', 'TradeReply: Optimize Your Trading Strategies & Analytics') }}</title>

		<!-- Fallback Metadata (React SSR will override per page) -->
		<meta name="description" content="Optimize your trades with TradeReply.com. Access powerful trading strategies, real-time analytics, and tools for crypto and stock market success." />

		<!-- Open Graph Fallback (For Social Media Sharing) -->
		<meta property="og:site_name" content="TradeReply" />
		<meta property="og:title" content="TradeReply: Optimize Your Trading Strategies & Analytics" />
		<meta property="og:description" content="Access powerful trading strategies, real-time analytics, and tools for crypto and stock market success with TradeReply.com." />
		<meta property="og:url" content="{{ url()->current() }}" />
		<meta property="og:type" content="website" />
		<meta property="og:image" content="{{ asset('images/tradereply-trading-analytics-og.jpg') }}" />
		<meta property="og:image:width" content="1200" />
		<meta property="og:image:height" content="630" />
		<meta property="og:locale" content="en_US" />

		<!-- Twitter Card (For Twitter Previews) -->
		<meta name="twitter:card" content="summary_large_image" />
		<meta name="twitter:title" content="TradeReply: Optimize Your Trading Strategies & Analytics" />
		<meta name="twitter:description" content="Access powerful trading strategies, real-time analytics, and tools for crypto and stock market success with TradeReply.com." />
		<meta name="twitter:image" content="{{ asset('images/tradereply-trading-analytics-og.jpg') }}" />
		<meta name="twitter:site" content="@JoinTradeReply" />

		<!-- Favicons (Same Across All Pages) -->
        <link rel="icon" href="{{ asset('tradereply-favicon.ico') }}" type="image/x-icon">
        <link rel="icon" href="{{ asset('tradereply-favicon.svg') }}" type="image/svg+xml">

		<!-- Fonts -->
		<link rel="preconnect" href="https://fonts.bunny.net" crossorigin="anonymous">
		<link href="https://fonts.bunny.net/css?family=figtree:400,500,600&display=swap" rel="stylesheet" />

        <!-- Scripts -->
        @routes
        @viteReactRefresh
        @vite(['resources/js/app.jsx', "resources/js/Pages/{$page['component']}.jsx"])
        @inertiaHead
    </head>
    <body class="font-sans antialiased">
        @inertia
    </body>
</html>

import Home from "@/Components/common/Home";
import HomeLayout from "@/Layouts/HomeLayout";
import { Head } from "@inertiajs/react";
import "../../../css/Home/home.scss";

export default function Welcome() {
  return (
    <HomeLayout>
      <Head>
        {/* Canonical URL (SSR) */}
        <link rel="canonical" href="https://www.tradereply.com/" />

        {/* Page Title (SSR) */}
        <title>TradeReply: Advanced Trading Tools & Strategy Optimization</title>
  
		{/* Meta Data (SSR)*/}  
		<meta name="description" content="Optimize your trades with TradeReply.com. Access powerful trading strategies, real-time analytics, and tools for crypto and stock market success." />
        <meta property="og:site_name" content="TradeReply" />
        <meta property="og:title" content="TradeReply: Advanced Trading Tools & Strategy Optimization" />
        <meta property="og:description" content="Optimize your trades with TradeReply.com. Access powerful trading strategies, real-time analytics, and tools for crypto and stock market success." />
        <meta property="og:url" content="https://www.tradereply.com/" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/images/tradereply-trading-analytics-og.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:locale" content="en_US" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="TradeReply: Advanced Trading Tools & Strategy Optimization" />
        <meta name="twitter:description" content="Optimize your trades with TradeReply.com. Access powerful trading strategies, real-time analytics, and tools for crypto and stock market success." />
        <meta name="twitter:image" content="/images/tradereply-trading-analytics-og.jpg" />
        <meta name="twitter:site" content="@JoinTradeReply" />
      </Head>

      <Home />
    </HomeLayout>
  );
}

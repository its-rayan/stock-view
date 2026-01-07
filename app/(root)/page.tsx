import TradingViewWidget from "@/features/tradingview/components/trading-view-widget";
import { MARKET_OVERVIEW_WIDGET_CONFIG } from "@/features/tradingview/constants";

const Home = () => {
  const TRADING_VIEW_BASE_URL =
    "https://s3.tradingview.com/external-embedding/embed-widget";

  return (
    <div className="flex min-h-screen homepage-wrapper">
      <section className="grid w-full gap-8 home-section">
        <div className="md:col-span-1 xl:col-span-1">
          <TradingViewWidget
            title="Market Overview"
            scriptUrl={`${TRADING_VIEW_BASE_URL}-market-overview.js`}
            config={MARKET_OVERVIEW_WIDGET_CONFIG}
            className="custom-chart"
            height={600}
          />
        </div>

        <div className="md:col-span xl:col-span-2">
          <TradingViewWidget
            title="Stock Heatmap"
            scriptUrl={`${TRADING_VIEW_BASE_URL}-stock-heatmap.js`}
            config={MARKET_OVERVIEW_WIDGET_CONFIG}
            height={600}
          />
        </div>
      </section>

      <section className="grid w-full gap-8 home-section">
        <div className="h-full col-span-1 ">
          <TradingViewWidget
            scriptUrl={`${TRADING_VIEW_BASE_URL}-timeline.js`}
            config={MARKET_OVERVIEW_WIDGET_CONFIG}
            className="custom-chart"
            height={600}
          />
        </div>

        <div className="md:col-span xl:col-span-2">
          <TradingViewWidget
            scriptUrl={`${TRADING_VIEW_BASE_URL}-market-quotes.js`}
            config={MARKET_OVERVIEW_WIDGET_CONFIG}
            height={600}
          />
        </div>
      </section>
    </div>
  );
};

export default Home;

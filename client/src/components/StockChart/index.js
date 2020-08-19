import React from "react";
import TradingViewWidget, { Themes } from 'react-tradingview-widget';

function StockChart(props) {
  return (
    <TradingViewWidget
      symbol={`${props.selectedSymbol.symbol}`}
      theme={Themes.DARK}
      autosize
    />
  );
}

export default StockChart;

import React, { useEffect, useState } from "react";

function StockPrice(props) {
  return (
    <div>
      <div>
        {props.selectedSymbol.displaySymbol} -{" "}
        {props.selectedSymbol.description}
      </div>
      <div>{props.price.c} US$</div>
      <div>{props.price.pc} US$</div>
    </div>
  );
}

export default StockPrice;

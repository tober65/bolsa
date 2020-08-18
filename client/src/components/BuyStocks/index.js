import React, { useEffect, useState } from "react";
import API from "../../utils/API";

function BuyStocks(props) {
  const [price, setPrice] = useState({});

  useEffect(() => {
    API.addStocks: (username, symbol, amount) => {
(props.selectedSymbol.symbol)
      .then((response) => {
        setPrice(response.data);
      })
      .catch((err) => console.log("Error!", err));
  }, [props.selectedSymbol]);

  return (
    <div>
      Buy Shares
    </div>
  );
}

export default BuyStocks;
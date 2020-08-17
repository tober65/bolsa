import React, { useEffect, useState } from "react";
import API from "../../utils/API";

function StockPrice(props) {
  const [price, setPrice] = useState({});
  
   useEffect(() => {
     API.getStockBySymbol(props.selectedSymbol.symbol)
       .then((response) => {
         setPrice(response.data);
       })
       .catch((err) => console.log("Error!", err));
   }, [props.selectedSymbol]);
  
  return (
    <div>
      <div>
        {props.selectedSymbol.displaySymbol} -{" "}
        {props.selectedSymbol.description}
      </div>
      <div>{price.c} US$</div>
      <div>{price.pc} US$</div>
    </div>
  );
}

export default StockPrice;

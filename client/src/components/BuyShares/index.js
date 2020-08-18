import React, { useEffect, useState } from "react";
import { useAuth } from "../../utils/auth";
import API from "../../utils/API";

function BuyShares(props) {
  const [amount, setAmount] = useState(0);
  const { user, logout } = useAuth();

  const buyStocks = () => {
    API.addStocks(user.email, props.selectedSymbol.symbol, amount)
    .then(() => {
      console.log('Buy successful'); //Modal goes  here.
    })
    .catch((err) => console.log("Error!", err));
  }

  return (
    <div>
      <div>Buy Shares</div>
      <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)}></input>
      <div>{props.price.c * amount} US$</div>
      <div><button disabled={amount <= 0} onClick={buyStocks}>BUY</button></div>
    </div>
  );
}

export default BuyShares;
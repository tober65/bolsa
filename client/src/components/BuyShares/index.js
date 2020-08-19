import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { useAuth } from "../../utils/auth";
import API from "../../utils/API";
import swal from "sweetalert";

function BuyShares(props) {
  const [amount, setAmount] = useState(0);
  const { user } = useAuth();

  const buyStocks = () => {
    API.addStocks(user.email, props.selectedSymbol.symbol, amount)
    .then(() => {
      swal({
        title: "Purchase Successful",
        text: `Congrats!! You now own ${amount} Shares of ${props.selectedSymbol.description}`,
        icon: "success",
        button: "OK",
      });
    })
    .catch((err) => console.log("Error!", err));
  }

  return (
    <Card.Body className="my-2">
      <div>Buy Shares</div>
      <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)}></input>
      <div>{props.price.c * amount} US$</div>
      <div><button disabled={amount <= 0} onClick={buyStocks}>BUY</button></div>
    </Card.Body>
  );
}

export default BuyShares;
import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { useAuth } from "../../utils/auth";
import API from "../../utils/API";
import swal from "sweetalert";

function BuyShares(props) {
  const [amount, setAmount] = useState(0);
  const [sellAmount, setSellAmount] = useState(0);
  const [userStocks, setUserStocks] = useState([]);
  const { user } = useAuth();
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    API.getUser(user.id)
    .then((response) => {
      setUserData(response.data);
    })
    .catch((err) => console.log("Error!", err));

    API.getUserStocks(user.email)
      .then((response) => {
        setUserStocks(response.data);
        console.log(response);
      })
      .catch((err) => console.log("Error!", err));
  }, []);

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
  };

  const sellStocks = () => {
    console.log('im in');
  };

  const getUserStocksView = () => {
    let filteredStocks = userStocks.filter(
      (stock) => stock.symbol === props.selectedSymbol.symbol
    );

    if (filteredStocks.length) {
      return <div>Shares: {filteredStocks[0].amount}</div>;
    }
  };

  const getSellView = () => {
    let filteredStocks = userStocks.filter(
      (stock) => stock.symbol === props.selectedSymbol.symbol
    );

    if (filteredStocks.length) {
      return (
        <div>
          <div>SELL SHARES</div>
          <input
            type="number"
            value={sellAmount}
            onChange={(e) => setSellAmount(e.target.value)}
          ></input>
          <div>{props.price.c * sellAmount} US$</div>
          <div>
            <button disabled={sellAmount > filteredStocks[0].amount} onClick={sellStocks}>
              SELL
            </button>
          </div>
        </div>
      );
    }
  }

  return (
    <Card.Body className="my-2">
      <div>Trade</div>
      {getUserStocksView()}
      <div>BUY SHARES</div>
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      ></input>
      <div>{props.price.c * amount} US$</div>
      <div>
        <button disabled={amount <= 0} onClick={buyStocks}>
          BUY
        </button>
      </div>
      {getSellView()}
    </Card.Body>
  );
}

export default BuyShares;

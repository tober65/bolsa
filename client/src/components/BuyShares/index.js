import React, { useEffect, useState } from "react";
import { Card, Row } from "react-bootstrap";
import { useAuth } from "../../utils/auth";
import API from "../../utils/API";
import swal from "sweetalert";
import "./BuyShares.css";

import "./BuyShares.css";

function BuyShares(props) {
  const [buyAmount, setBuyAmount] = useState(0);
  const [sellAmount, setSellAmount] = useState(0);
  const [userStocks, setUserStocks] = useState([]);
  const { user } = useAuth();
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    API.getUser(user.id)
      .then((response) => {
        setUserData(response.data);
        props.onLoadedData1();
      })
      .catch((err) => console.log("Error!", err));

    API.getUserStocks(user.email)
      .then((response) => {
        setUserStocks(response.data);
        props.onLoadedData2();
      })
      .catch((err) => console.log("Error!", err));
  }, []);

  const buyStocks = () => {
    let filteredStocks = userStocks.filter(
      (stock) => stock.symbol === props.selectedSymbol.symbol
    );

    let currentAmount = filteredStocks.length ? filteredStocks[0].amount : 0;

    let cost = +(+buyAmount * props.price.c).toFixed(2);

    API.addStocks(
      user.email,
      props.selectedSymbol.symbol,
      currentAmount + Number(buyAmount)
    )
      .then(() => {
        API.getUserStocks(user.email)
          .then((response) => {
            setUserStocks(response.data);
          })
          .catch((err) => console.log("Error!", err));
      })
      .catch((err) => console.log("Error!", err));

    API.setBalance(user.email, +(userData.balance - cost).toFixed(2))
      .then(() => {
        API.getUser(user.id)
          .then((response) => {
            setUserData(response.data);
          })
          .catch((err) => console.log("Error!", err));
      })
      .catch((err) => console.log("Error!", err));

    swal({
      title: "Buy Successful",
      text: `Congrats!! You now own ${buyAmount} Shares of ${
        props.selectedSymbol.description
      }. Your current balance is ${+(userData.balance - cost).toFixed(2)}`,
      icon: "success",
      button: "OK",
    });
  };

  const sellStocks = () => {
    let filteredStocks = userStocks.filter(
      (stock) => stock.symbol === props.selectedSymbol.symbol
    );
    let currentAmount = filteredStocks[0].amount;

    let profit = +(+sellAmount * props.price.c).toFixed(2);

    API.addStocks(
      user.email,
      props.selectedSymbol.symbol,
      currentAmount - +sellAmount
    )
      .then(() => {
        API.getUserStocks(user.email)
          .then((response) => {
            setUserStocks(response.data);
          })
          .catch((err) => console.log("Error!", err));
      })
      .catch((err) => console.log("Error!", err));

    API.setBalance(user.email, +(userData.balance + profit).toFixed(2))
      .then(() => {
        API.getUser(user.id)
          .then((response) => {
            setUserData(response.data);
          })
          .catch((err) => console.log("Error!", err));
      })
      .catch((err) => console.log("Error!", err));

    swal({
      title: "Sell Successful",
      text: `Congrats!! You sold ${sellAmount} Shares of ${
        props.selectedSymbol.description
      }. Your current balance is ${+(userData.balance + profit).toFixed(2)}`,
      icon: "success",
      button: "OK",
    });
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
          <Row className="justify-content-center">
            <div>SELL SHARES</div>
            <span className="mx-2">-</span>
            <div>{+(props.price.c * +sellAmount).toFixed(2)} US$</div>
          </Row>
          <Row className="align-items-center justify-content-center">
            <input
              className="shares mx-1"
              type="number"
              value={sellAmount}
              onChange={(e) => setSellAmount(e.target.value)}
            ></input>
            <button
              className="share-button mx-1"
              disabled={
                +sellAmount > filteredStocks[0].amount || +sellAmount <= 0
              }
              onClick={sellStocks}
            >
              SELL
            </button>
          </Row>
        </div>
      );
    }
  };
  return (
    <Card.Body className="my-2">
      <div className="trade">Trade</div>
      <Row className="space-evenly">
        <div className="balance">Balance: {userData.balance}</div>
        {getUserStocksView()}
      </Row>

      <Row className="justify-content-center">
        <div>BUY SHARES</div>
        <span className="mx-2">-</span>
        <div>{+(props.price.c * buyAmount).toFixed(2)} US$</div>
      </Row>
      <Row className="align-items-center justify-content-center">
        <input
          className="shares mx-1"
          type="number"
          value={buyAmount}
          onChange={(e) => setBuyAmount(e.target.value)}
        ></input>
        <button
          className="share-button mx-1"
          disabled={
            +buyAmount <= 0 || +buyAmount * props.price.c > userData.balance
          }
          onClick={buyStocks}
        >
          BUY
        </button>
      </Row>
      {getSellView()}
    </Card.Body>
  );
}

export default BuyShares;

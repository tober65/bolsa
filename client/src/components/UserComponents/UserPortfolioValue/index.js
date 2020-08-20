import React from "react";

function UserPortfolioValue(props) {
    let totalValue = 0;
    let stocksPrice = Object.values(props.price);
    let stocksAmount = [];

    for (let i = 0; i < props.stocks.length; i++) {
        stocksAmount.push(props.stocks[i].amount);
    }

    for (let i = 0; i < stocksPrice.length; i++) {
        totalValue = totalValue + (stocksPrice[i] * stocksAmount[i])
    }

    totalValue.toFixed(2);
    console.log(stocksPrice);
    return(
        totalValue
    );
}

export default UserPortfolioValue;

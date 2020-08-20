import React from "react";

function UserPortfolioValue(props) {
    let totalValue = 0;
    let stocks = Object.values(props.price);

    for (let i = 0; i < stocks.length; i++) {
        totalValue = totalValue + stocks[i] 
    }
    totalValue.toFixed(2);
    console.log(stocks);
    return(
        totalValue
    );
}

export default UserPortfolioValue;

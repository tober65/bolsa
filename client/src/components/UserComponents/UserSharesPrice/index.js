import React, { useEffect } from "react";
import { Col } from "react-bootstrap";

function UserSharesPrice({price}) {
    return (<Col className="test">
            <p className="userSharePrice test">
                {price}
            </p>
        </Col>
    );
}

export default UserSharesPrice;


//Get all the user stocks
    //getUserStocks()
//Get the value for each stock from the API
    //stocks.price.c
//Create a math function that takes the # of specific stocks and multiplies it by their value
    //stocks.amount * stocks.price.c
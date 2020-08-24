import React from "react";
import { Col } from "react-bootstrap";
import "./userstocks.css";

function UserStocks({ stockName }) {
    return (<Col>
        <p className="userStocks">
            {stockName}
            </p>
        </Col>
    );
}

export default UserStocks;
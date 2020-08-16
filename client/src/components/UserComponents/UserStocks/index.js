import React from "react";
import { Col } from "react-bootstrap";

function UserStocks({ stockName }) {
    return (<Col lg={6} className="test">
        <p className="userStocks test">
            Tesla
            </p>
        </Col>
    );
}

export default UserStocks;
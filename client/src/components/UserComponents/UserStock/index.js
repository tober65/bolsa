import React from "react";
import { Col } from "react-bootstrap";

function UserStock({ stockName }) {
    return (<Col lg={6} className="test">
        <p className="userStocks test">
            {stockName}
        </p>
    </Col>
    );
}

export default UserStock;
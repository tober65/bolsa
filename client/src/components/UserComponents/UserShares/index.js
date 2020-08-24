import React from "react";
import { Col } from "react-bootstrap";
import "../../PortfolioComponents/columns.css";

function UserShares({ stockShares }) {
    return (<Col>
        <p className="userShares">
            {stockShares}
            </p>
        </Col>
    );
}

export default UserShares;
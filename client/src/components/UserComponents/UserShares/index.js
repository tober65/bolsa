import React from "react";
import { Col } from "react-bootstrap";

function UserShares({ stockShares }) {
    return (<Col lg={3} className="test">
        <p className="userShares test">
            {stockShares}
            </p>
        </Col>
    );
}

export default UserShares;
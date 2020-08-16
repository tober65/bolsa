import React from "react";
import { Col } from "react-bootstrap";

function UserSharesPrice({shareValues}) {
    return (<Col lg={3} className="test">
            <p className="userSharePrice test">
                {shareValues}
            </p>
        </Col>
    );
}

export default UserSharesPrice;
import React from "react";
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
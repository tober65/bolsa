import React from "react";
import { Col } from "react-bootstrap";

function UserSharesPrice({price}) {
    return (<Col>
            <p className="userSharePrice">
                ${price}
            </p>
        </Col>
    );
}

export default UserSharesPrice;
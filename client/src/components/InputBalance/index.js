import React from "react";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import "./inputbalance.css";

function InputBalance() {
    return (
        <div className = "text-center">
            <Form.Group>
                <Form.Control type="text" placeholder="Enter Amount of Funds" />
            </Form.Group>
            <Button variant="secondary" className = "button">Add Funds!</Button>
        </div>
    )
}

export default InputBalance;
import React, { useEffect, useState } from "react";
import { Col, Row} from "react-bootstrap";
import "./StockPrice.css";

function StockPrice(props) {
  return (
    <div className="stockprices">
      <Row className="selected-stock">
        {props.selectedSymbol.displaySymbol} -{" "}
        {props.selectedSymbol.description}
      </Row>
      <Row>
        <Col>Current Price</Col>
        <Col>{props.price.c} US$</Col>
      </Row>

      <Row>
        <Col>Previous Close</Col>
        <Col>{props.price.pc} US$</Col>
      </Row>
    </div>
  );
}

export default StockPrice;

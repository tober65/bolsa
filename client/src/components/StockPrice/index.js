import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import "./StockPrice.css";

function StockPrice(props) {
  return (
    <div className="stockprices p-1">
      <Table>
        <thead>
          {props.selectedSymbol.displaySymbol} -{" "}
          {props.selectedSymbol.description}
        </thead>
        <tbody className="prices">
          <tr>
            <td>Current Price</td>
            <td>{props.price.c} US$</td>
          </tr>
          <tr>
            <td>Previous Close</td>
            <td>{props.price.pc} US$</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}

export default StockPrice;

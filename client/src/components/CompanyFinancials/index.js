import React, { useEffect, useState } from "react";
import { Row, Col, Card } from "react-bootstrap";
import API from "../../utils/API";

function CompanyFinancials(props) {
  const [financials, setFinancials] = useState({
    metric: {},
  });

  useEffect(() => {
    API.getCompanyFinancials(props.selectedSymbol.symbol)
      .then((response) => {
        setFinancials(response.data);
      })
      .catch((err) => console.log("Error!", err));
  }, [props.selectedSymbol]);

  return (
    <Card.Body className="my-2">
      <Row>
        <Col>
          <div>52 Week High</div>
          <div>{financials.metric["52WeekHigh"]}</div>
        </Col>
        <Col>
          <div>52 Week Low</div>
          <div>{financials.metric["52WeekLow"]}</div>
        </Col>
        <Col>
          <div>10 Day Volume</div>
          <div>{financials.metric["10DayAverageTradingVolume"]}</div>
        </Col>
      </Row>
      <Row>
        <Col>
          <div>Dividend Yield</div>
          <div>{financials.metric["currentDividendYieldTTM"]}</div>
        </Col>
        <Col>
          <div>Annual ROI</div>
          <div>{financials.metric["roiAnnual"]}</div>
        </Col>
      </Row>
    </Card.Body>
  );
}

export default CompanyFinancials;

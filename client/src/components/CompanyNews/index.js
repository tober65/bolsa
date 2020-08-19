import React, { useEffect, useState } from "react";
import { Card, Row, Col } from "react-bootstrap"
import API from "../../utils/API";
import moment from "moment";


function CompanyNews(props) {
  const [news, setNews] = useState([]);

  useEffect(() => {
    API.getNewsBySymbol(props.selectedSymbol.symbol)
      .then((response) => {
        setNews(response.data.slice(0, 10));
      })
      .catch((err) => console.log("Error!", err));
  }, [props.selectedSymbol]);

  return (
    <Card.Body className="my-2">
      <Card.Title className="news-title">News</Card.Title>
      {news.map((item) => (
        <Row className="news-row">
          <Col xs={1}>
            <span className="date">
              {moment(item.datetime * 1000).format("M/D")}
            </span></Col>
          <Col xs={11}>
            <a key={item.id} href={item.url} target="_blank">
              <div>{item.headline}</div>
            </a>
          </Col>
        </Row>
      ))}
    </Card.Body>
);
}

export default CompanyNews;

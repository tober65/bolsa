import React, { useEffect, useState } from "react";
import API from "../../utils/API";
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";

function StockNews(props) {
  const [news, setNews] = useState([]);

  useEffect(() => {
    API.getNews(props.selectedSymbol.symbol)
      .then((response) => {
        setNews(response.data.slice(0, 10));
      })
      .catch((err) => console.log("Error!", err));
  }, [props.selectedSymbol]);

  return (
    <Container>
      <Row>
        <div>
          {news.map((item) => (
            <a key={item.id} href={item.url} target="_blank">
              <div>{item.headline}</div>
            </a>
          ))}
        </div>
      </Row>
    </Container>
  );
}

export default StockNews;

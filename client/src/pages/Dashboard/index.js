import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import { useAuth } from "../../utils/auth";
import SearchBox from "../../components/SearchBox";
import NewsColumn from "../../components/NewsColumn";
import StockPrice from "../../components/StockPrice";
import CompanyNews from "../../components/CompanyNews";
import CompanyFinancials from "../../components/CompanyFinancials";
import BuyShares from "../../components/BuyShares";
import StockChart from "../../components/StockChart";
import API from "../../utils/API";
import "./dashboard.css";

function Dashboard() {
  //const { user, logout } = useAuth();
  // const history = useHistory();

  //const goToEditProfile = () => history.push("/portfolio");
  const [symbols, setSymbols] = useState([]);
  const [selectedSymbol, setSelectedSymbol] = useState({});
  const [price, setPrice] = useState({});

  useEffect(() => {
    API.getStockSymbols()
      .then((response) => {
        setSymbols(response.data);
      })
      .catch((err) => console.log("Error!", err));
  }, []);

  useEffect(() => {
    API.getStockBySymbol(selectedSymbol.symbol)
      .then((response) => {
        setPrice(response.data);
      })
      .catch((err) => console.log("Error!", err));
  }, [selectedSymbol]);

  const handleChange = (event, value) => {
    setSelectedSymbol(value);
  };

  if (Object.keys(selectedSymbol).length === 0) {
    return (
      <Container>
        <h1>Dashboard</h1>
        <Row>
          <Col lg={4}>
            <SearchBox symbols={symbols} onChange={handleChange} />
          </Col>
          <Col lg={8}>
            <NewsColumn />
          </Col>
        </Row>
      </Container>
    );
  }

  return (
    <Container>
      <h1>Dashboard</h1>
      <Row>
        <Col  lg={4}>
          <SearchBox symbols={symbols} onChange={handleChange} />
          <StockPrice selectedSymbol={selectedSymbol} price={price} />
          <BuyShares selectedSymbol={selectedSymbol} price={price} />
          <CompanyFinancials selectedSymbol={selectedSymbol} />
        </Col>
        <Col  lg={8} style={{minHeight: 488}}>
          <StockChart selectedSymbol={selectedSymbol}/>
        </Col>
      </Row>
      <Row>
        <CompanyNews selectedSymbol={selectedSymbol} />
      </Row>
    </Container>
  );
}

export default Dashboard;

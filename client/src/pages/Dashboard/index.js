import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import { useAuth } from "../../utils/auth";
import SearchBox from "../../components/SearchBox";
import StockPrice from "../../components/StockPrice";
import StockNews from "../../components/NewsCompany";
import API from "../../utils/API";
import "./dashboard.css";

function Dashboard() {
  // const { user, logout } = useAuth();
  // const history = useHistory();

  //const goToEditProfile = () => history.push("/portfolio");
  const [symbols, setSymbols] = useState([]);
  const [selectedSymbol, setSelectedSymbol] = useState({});

  useEffect(() => {
    API.getStockSymbols()
      .then((response) => {
        setSymbols(response.data);
      })
      .catch((err) => console.log("Error!", err));
  }, []);

  const handleChange = (event, value) => {
    setSelectedSymbol(value);
  };

  return (
    <Container>
      <h1>Dashboard</h1>
      <Row>
        <Col>
          <SearchBox symbols={symbols} onChange={handleChange} />
          <StockPrice selectedSymbol={selectedSymbol} />
        </Col>
        <Col>
          <div>Graph</div>
        </Col>
      </Row>
      <Row>
        <Col>
          <div>Stock Basic Financials</div>
        </Col>
        <Col>
          <StockNews selectedSymbol={selectedSymbol} />
        </Col>
      </Row>
    </Container>
  );
}

export default Dashboard;

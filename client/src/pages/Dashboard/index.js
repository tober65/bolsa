import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { Container, Row, Col, Fade } from "react-bootstrap";
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
  const { user, logout } = useAuth();
  // const history = useHistory();

  const [symbols, setSymbols] = useState([]);
  const [selectedSymbol, setSelectedSymbol] = useState({});
  const [price, setPrice] = useState({});
  const [open, setOpen] = useState(false);

  useEffect(() => {
    API.getStockSymbols()
      .then((response) => {
        setSymbols(response.data);
        setOpen(true);
      })
      .catch((err) => console.log("Error!", err));
  }, []);

  useEffect(() => {
    API.getStockBySymbol(selectedSymbol.symbol)
      .then((response) => {
        setOpen(true);
        setPrice(response.data);
      })
      .catch((err) => console.log("Error!", err));
  }, [selectedSymbol]);

  const handleChange = (event, value) => {
    setOpen(false);
    if (value) {
      setSelectedSymbol(value);
    } else {
      setSelectedSymbol("");
    }
  };

  if (Object.keys(selectedSymbol).length === 0) {
    return (
      <Fade timeout={500} in={open}>
        <Container>
          <h1 className="db">Dashboard</h1>
          <Row>
            <Col lg={4}>
              <SearchBox symbols={symbols} onChange={handleChange} />
            </Col>
            <Col lg={8}>
              <NewsColumn />
            </Col>
          </Row>
        </Container>
      </Fade>
    );
  }

  return (
    <Fade timeout={500} in={open}>
      <Container>
        <h1>Dashboard</h1>
        <Row>
          <Col lg={4}>
            <SearchBox symbols={symbols} onChange={handleChange} />
            <br></br>
            <StockPrice selectedSymbol={selectedSymbol} price={price} />
            <BuyShares selectedSymbol={selectedSymbol} price={price} />
            <CompanyFinancials selectedSymbol={selectedSymbol} />
          </Col>
          <br></br>
          <Col lg={8} style={{ minHeight: 488 }}>
            <StockChart selectedSymbol={selectedSymbol} />
          </Col>
        </Row>
        <br></br>
        <Row>
          <CompanyNews selectedSymbol={selectedSymbol} />
        </Row>
      </Container>
    </Fade>
  );
}

export default Dashboard;

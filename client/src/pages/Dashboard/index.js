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
  const [stockPriceLoaded, setStockPriceLoaded] = useState(false);
  const [companyNewsLoaded, setCompanyNewsLoaded] = useState(false);
  const [userStocksLoaded, setUserStocksLoaded] = useState(false);
  const [userDataLoaded, setUserDataLoaded] = useState(false);
  const [companyFinancialsLoaded, setCompanyFinancialsLoaded] = useState(false);

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
        setPrice(response.data);
        setStockPriceLoaded(true);
      })
      .catch((err) => console.log("Error!", err));
  }, [selectedSymbol]);

  useEffect(() => {
    if (
      companyFinancialsLoaded &&
      stockPriceLoaded &&
      userStocksLoaded &&
      userDataLoaded &&
      companyNewsLoaded
    ) {
      setOpen(true);
    }
  }, [
    companyFinancialsLoaded,
    stockPriceLoaded,
    userStocksLoaded,
    userDataLoaded,
    companyNewsLoaded,
  ]);

  const handleChange = (event, value) => {
    setStockPriceLoaded(false);
    setCompanyFinancialsLoaded(false);
    setCompanyNewsLoaded(false);
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
    <div>
      <Fade timeout={500} in={open}>
        <Container>
          <h1>Dashboard</h1>
          <Row>
            <Col lg={4}>
              <SearchBox symbols={symbols} onChange={handleChange} />
              <br></br>
              <StockPrice selectedSymbol={selectedSymbol} price={price} />
              <BuyShares
                selectedSymbol={selectedSymbol}
                price={price}
                onLoadedData1={() => setUserDataLoaded(true)}
                onLoadedData2={() => setUserStocksLoaded(true)}
              />
              <CompanyFinancials
                selectedSymbol={selectedSymbol}
                onLoadedData={() => setCompanyFinancialsLoaded(true)}
              />
            </Col>
            <br></br>
            <Col lg={8} style={{ minHeight: 488 }}>
              <StockChart selectedSymbol={selectedSymbol} />
            </Col>
          </Row>
          <br></br>
          <Row>
            <CompanyNews
              selectedSymbol={selectedSymbol}
              onLoadedData={() => setCompanyNewsLoaded(true)}
            />
          </Row>
        </Container>
      </Fade>
      {!open && (
        <div className="lds-grid"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
      )}
    </div>
  );
}

export default Dashboard;

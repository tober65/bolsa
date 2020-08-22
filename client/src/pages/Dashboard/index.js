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
  const [loadedData, setLoadedData] = useState({
    stockPrice: false,
    companyNews: false,
    userStocks: false,
    userData: false,
    companyFinancils: false,
  });

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
        setLoadedData({ ...loadedData, stockPrice: true });
      })
      .catch((err) => console.log("Error!", err));
  }, [selectedSymbol]);

  useEffect(() => {
    //console.log('loadedData', loadedData);
    //[stockPrice, companyNews, userStocks, userData,]
    if (Object.keys(loadedData).every((key) => loadedData[key])) {
      setOpen(true);
    }
  }, [loadedData]);

  const handleChange = (event, value) => {
    setOpen(false);
    if (value) {
      setSelectedSymbol(value);
    } else {
      setSelectedSymbol("");
    }
  };

  const handleLoadedData = (loadedDataKey) => {
    console.log("before loaded data", loadedData);
    let newObj = { ...loadedData, [loadedDataKey]: true };
    console.log('test', newObj)
    setLoadedData(newObj);
    console.log("after loaded data", loadedData);
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
            <BuyShares
              selectedSymbol={selectedSymbol}
              price={price}
              onLoadedData={handleLoadedData}
            />
            <CompanyFinancials
              selectedSymbol={selectedSymbol}
              onLoadedData={handleLoadedData}
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
            onLoadedData={handleLoadedData}
          />
        </Row>
      </Container>
    </Fade>
  );
}

export default Dashboard;

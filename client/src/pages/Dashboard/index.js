import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { Container } from "react-bootstrap";
import { useAuth } from "../../utils/auth";
import SearchBox from "../../components/SearchBox";
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
      <SearchBox symbols={symbols} onChange={handleChange} />
      <div style={{ color: "white" }}>
        Selected Symbol: {JSON.stringify(selectedSymbol)}
      </div>
    </Container>
  );
}

export default Dashboard;

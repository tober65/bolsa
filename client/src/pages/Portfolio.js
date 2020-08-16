import React, { useState, useEffect } from "react";
import PortfolioColumns from "../components/PortfolioComponents/PortfolioColumns";
import API from "./../utils/API";
import { useAuth } from "../utils/auth";

function Portfolio() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const { user } = useAuth();



  useEffect(() => {
    loadStocks();
    API.getUser(user.id).then((res) => {
      setUsername(res.data.username);
      setEmail(res.data.email);
    });
  }, [user]);

  function loadStocks() {
    API.getUserStocks()
  };



  return (
        <PortfolioColumns
          portfolioValue = {}
          stockName = {}
          stockShares = {}
          shareValues = {}
        />
  )
};

export default Portfolio;

import React, { useState, useEffect } from "react";
import PortfolioColumns from "../components/PortfolioComponents/PortfolioColumns";
import API from "./../utils/API";
import { useAuth } from "../utils/auth";

function Portfolio() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const { user } = useAuth();
  const [stocks, setStocks] = useState([]);

  useEffect(() => {
    // loadUserStocks();
    API.getUser(user.id).then((res) => {
      setUsername(res.data.username);
      setEmail(res.data.email);
    });
  }, [user]);

  console.log(username);

stocks.symbol
  
  // function loadUserStocks() {
  //   API.getUserStocks()
  //     .then(res => res.json())
  //       .then((result)=> {
  //         setStocks(result.stocks);
  //       })
  // };

  //TO DO
  //CREATE FUNCTIONS FOR THE FOLLOWING TASK:
    //CALL API TO GET USER STOCKS
      //RETRIEVE STOCK NAMES, # OF SHARES, AND TOTAL VALUE OF SHARES
        //USING THIS OBTAIN TOTAL PORTFOLIO VALUE

  return (
        <PortfolioColumns/>
  )
};

export default Portfolio;

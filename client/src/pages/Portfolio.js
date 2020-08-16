import React, { useState, useEffect } from "react";
import PortfolioColumns from "../components/Portfoliocolumns/Portfoliocolumns";
import API from "./../utils/API";
import { useAuth } from "../utils/auth";

function Portfolio() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const { user } = useAuth();

  

  useEffect(() => {
    API.getUser(user.id).then((res) => {
      setUsername(res.data.username);
      setEmail(res.data.email);
    });
  }, [user]);

  return (
        <PortfolioColumns></PortfolioColumns>
  )
};

export default Portfolio;

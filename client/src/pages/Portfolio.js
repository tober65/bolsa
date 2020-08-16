import React, { useState, useEffect } from "react";
import PortfolioColumns from "../components/Portfoliocolumns";
import Navbar from "../components/Navbar";
import API from "./../utils/API";
import {Container} from "react-bootstrap";
import {Row} from "react-bootstrap";
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

  return (<div>
    <Navbar>
    </Navbar>
    <Container>
      <Row>
        <PortfolioColumns></PortfolioColumns>
      </Row>
    </Container>
  </div>
  )
};

export default Portfolio;

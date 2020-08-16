import React from "react";
import PortfolioColumns from "../components/Portfoliocolumns"
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Navbar } from "react-bootstrap";

function Portfolio() {
  return (<div>
    <Navbar expand="lg" variant="light" bg="primary">
      <Navbar.Brand href="#">Navbar</Navbar.Brand>
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
import React from "react";
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Card } from "react-bootstrap";
import { Navbar } from "react-bootstrap";

function Portfolio() {
  return (<div>
    <Navbar expand="lg" variant="light" bg="primary">
      <Navbar.Brand href="#">Navbar</Navbar.Brand>
    </Navbar>
    <Container>
      <Row>
        <Col sm={6} md={5} lg={4}>
          <h2 className="mt-3 text-center">
            Your Portfolio
        </h2>
          <h3 className="mt-3 text-center">
            Total Value: $2,078.87
        </h3>
          <div className="mt-4 text-center">
            <h5>
              Portfolio Distribution
            </h5>
          //INSERT THE DISTRIBUTION GRAPH HERE
          </div>
        </Col>
        <Col sm={6} md={7} lg={8}>
          <Card className="mt-3">
            <Container>
              <Card.Body>
                <Card.Title>
                  <h5>
                    Stocks
                  </h5>
                </Card.Title>
                <Row>
                  <Col lg={6}>
                    USO - UNITED STATES OIL FUND
                            </Col>
                  <Col lg={3}>
                    20 SHARES
                            </Col>
                  <Col lg={3}>
                    $660.80
                            </Col>
                </Row>
              </Card.Body>
            </Container>
          </Card>
        </Col>
      </Row>
    </Container>
  </div>
  )
};

export default Portfolio;
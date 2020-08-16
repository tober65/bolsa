import React from "react";
import { Col } from "react-bootstrap";
import { Card } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";

function PortfolioColumns(props) {
    console.log(props);
    return (<div>
        <Col sm={6} md={5} lg={4}>
            <h2 className="mt-3 text-center">
                Your Portfolio
            </h2>
            <h3 className="mt-3 text-center">
                //GET USER DATA FOR HOW MUCH THEIR PORTFOLIO IS WORTH
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
                                //GET USER DATA FOR WHAT STOCKS THEY HAVE
                            </Col>
                            <Col lg={3}>
                                //GET USER DATA FOR HOW MANY SHARES THEY HAVE PER STOCK
                            </Col>
                            <Col lg={3}>
                                //GET DATA FOR HOW MUCH THE USER HAS IN THAT STOCK
                            </Col>
                        </Row>
                    </Card.Body>
                </Container>
            </Card>
        </Col>
    </div>
    );
}

export default PortfolioColumns;


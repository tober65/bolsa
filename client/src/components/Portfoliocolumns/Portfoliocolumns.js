import React from "react";
import { Col } from "react-bootstrap";
import { Card } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import ChartsPage from "../Userchart/Userchart";
import "./columns.css";

function PortfolioColumns(props) {
    console.log(props);
    return (<div>
        <Container>
            <Row>
                <Col sm={6} md={5} lg={4} xl={5}>
                    <h2 className="mt-3 text-center">
                        Your Portfolio
            </h2>
                    <h3 className="mt-3 text-center">
                    $2,078.87
                    </h3>
                    <div className="mt-4 text-center">
                        <ChartsPage></ChartsPage>
                    </div>
                </Col>
                <Col sm={6} md={7} lg={8} xl={7}>
                    <Card className="mt-3 test">
                        <Container className = "test">
                            <Card.Body className = "test">
                                <Card.Title className = "test">
                                    <h5 className = "test stocks">
                                        Stocks
                            </h5>
                                </Card.Title>
                                <Row className = "test">
                                    <Col lg={6} className = "test">
                                        <p className= "userStocks test">
                                            TSLA - Tesla
                                </p>
                                    </Col>
                                    <Col lg={3} className = "test">
                                        <p className = "userShares test">
                                            300 Shares
                                </p>
                                    </Col>
                                    <Col lg={3} className = "test">
                                        <p className = "userSharePrice test">
                                            $495000
                                </p>
                                    </Col>
                                </Row>
                                <Row className = "test">
                                    <Col lg={6} className = "test">
                                        <p className= "userStocks test">
                                            AAPL - Apple
                                </p>
                                    </Col>
                                    <Col lg={3} className = "test">
                                        <p className = "userShares test">
                                            50 Shares
                                </p>
                                    </Col>
                                    <Col lg={3} className = "test">
                                        <p className = "userSharePrice test">
                                            $495000
                                </p>
                                    </Col>
                                </Row>
                                <Row className = "test">
                                    <Col lg={6} className = "test">
                                        <p className= "userStocks test">
                                            MSFT - Microsoft
                                </p>
                                    </Col>
                                    <Col lg={3} className = "test">
                                        <p className = "userShares test">
                                            100 Shares
                                </p>
                                    </Col>
                                    <Col lg={3} className = "test">
                                        <p className = "userSharePrice test">
                                            $495000
                                </p>
                                    </Col>
                                </Row>
                                <Row className = "test">
                                    <Col lg={6} className = "test">
                                        <p className= "userStocks test">
                                            DAL - Delta Airlines
                                </p>
                                    </Col>
                                    <Col lg={3} className = "test">
                                        <p className = "userShares test">
                                            120 Shares
                                </p>
                                    </Col>
                                    <Col lg={3} className = "test">
                                        <p className = "userSharePrice test">
                                            $495000
                                </p>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Container>
                    </Card>
                </Col>
            </Row>
        </Container>
    </div>
    );
}

export default PortfolioColumns;


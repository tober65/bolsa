import React from "react";
import { Col } from "react-bootstrap";
import { Card } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import ChartsPage from "../Userchart/Userchart";
import PortfolioValue from "../PortfolioValue";
import UserStocks from "../UserStocks";
import UserShares from "../UserShares";
import UserSharesPrice from "../UserSharesPrice";
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
                    <PortfolioValue/>
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
                                    <UserStocks/>
                                    <UserShares/>
                                    <UserSharesPrice/>
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


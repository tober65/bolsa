import React from "react";
import "../../utils/API";
import { Col } from "react-bootstrap";
import { Card } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import UserChart from "../UserComponents/UserChart";
import UserPortfolioValue from "../UserComponents/UserPortfolioValue";
import UserStock from "../UserComponents/UserStock";
import UserShares from "../UserComponents/UserShares";
import UserSharesPrice from "../UserComponents/UserSharesPrice";
import "./columns.css";



function PortfolioColumns(props) {
    const stocks = getUserStocks(username);

    console.log(props);
    return (<div>
        <Container>
            <Row>
                <Col sm={6} md={5} lg={4} xl={5}>
                    <h2 className="mt-3 text-center">
                        Your Portfolio
                    </h2>
                    <h3 className="mt-3 text-center">
                        <UserPortfolioValue/>
                    </h3>
                    <div className="mt-4 text-center">
                        <UserChart/>
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
                                    {stocks.map((stock) => {
                                        <UserStock stockName = {stock.symbol}/>
                                    })}
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


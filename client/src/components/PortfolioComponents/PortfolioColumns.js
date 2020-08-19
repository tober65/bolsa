import React, { useEffect, useState } from "react";
import { Col } from "react-bootstrap";
import { Card } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import UserChart from "../UserComponents/UserChart";
import UserPortfolioValue from "../UserComponents/UserPortfolioValue";
import UserStocks from "../UserComponents/UserStocks";
import UserShares from "../UserComponents/UserShares";
import UserSharesPrice from "../UserComponents/UserSharesPrice";
import "./columns.css";
import API from "../../utils/API";


function PortfolioColumns(props) {
    let [stocks, setStocks] = useState([]);
    useEffect(() => {
        API.getUserStocks("test").then((results) => {
            setStocks(results.data);
        }).catch((error) => console.log(error));
    }, []);
    console.log(props);
    return (
        <div>
            <Container>
                <Row>
                    <Col sm={6} md={5} lg={4} xl={5}>
                        <h2 className="mt-3 text-center">Your Portfolio</h2>
                        <h3 className="mt-3 text-center">
                            <UserPortfolioValue />
                        </h3>
                        <div className="mt-4 text-center">
                            <UserChart />
                        </div>
                    </Col>
                    <Col sm={6} md={7} lg={8} xl={7}>
                        <Card className="mt-3 test">
                            <Container className="test">
                                <Card.Body className="test">
                                    <Card.Title className="test">
                                        <h5 className="test stocks">Stocks</h5>
                                    </Card.Title>
                                    <Row className="test">
                                        {stocks.map((item) => {
                                            return (
                                                <tr>
                                                    <UserStocks stockName={item.symbol} />
                                                    <UserShares stockShares={item.amount} />
                                                    <UserSharesPrice />
                                                </tr>
                                            );
                                        })}
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
import React, { useEffect, useState } from "react";
import { Col } from "react-bootstrap";
import { Card } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Table } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import UserChart from "../UserComponents/UserChart";
import UserPortfolioValue from "../UserComponents/UserPortfolioValue";
import UserStocks from "../UserComponents/UserStocks";
import UserShares from "../UserComponents/UserShares";
import UserSharesPrice from "../UserComponents/UserSharesPrice";
import UserBalance from "../UserComponents/UserBalance";
import "./columns.css";
import API from "../../utils/API"
import { useAuth } from "../../utils/auth";

function PortfolioColumns(props) {
    let [stocks, setStocks] = useState([]);
    let [price, setPrice] = useState({});
    let [userBalance, setUserBalance] = useState("");
    let [formObject, setFormObject] = useState({
        fundsForm: ""
    })

    const { user } = useAuth();
    useEffect(() => {
        API.getUser(user.id).then((res) => {
            setUserBalance(res.data.balance);
        });

        API.getUserStocks(props.username).then((results) => {
            setStocks(results.data);
            let priceObj;
            for (let i = 0; i < results.data.length; i++) {
                API.getStockBySymbol(results.data[i].symbol).then((response) => {
                    priceObj = { ...priceObj, [results.data[i].symbol]: response.data.c }
                    setPrice(priceObj);
                }).catch((error) => { console.log(error) })
            };
        }).catch((error) => console.log(error));
    }, []);

    function handleInputChange(event) {
        const { name, value } = event.target;
        setFormObject({ ...formObject, [name]: value })
    }

    function handleFormSubmit(event) {
        event.preventDefault();
        if (formObject.fundsForm) {
            let funds = formObject.fundsForm
            let total = parseInt(funds) + parseInt(userBalance);
            API.setBalance(
                user.email,
                total
            )
                .then(() => setFormObject({
                    fundsForm: ""
                }))
                .then(() => API.getUser(user.id).then((res) => {
                    setUserBalance(res.data.balance);
                })
                )
        };
    }

    return (
        <div>
            <Container>
                <h2 className="mt-3 text-center">Your Portfolio</h2>
                <Row className="mt-4">
                    <Col sm={6} md={5} lg={4} xl={5} className="column1">
                        <h3 className="mt-3 text-center">
                            $<UserPortfolioValue price={price} stocks={stocks} /> Invested
                        </h3>
                        <h2 className="mt-3 text-center">
                            Total Balance
                        </h2>
                        <h3 className="mt-3 text-center">
                            <UserBalance Balance={userBalance} />
                        </h3>
                        <div>
                            <Form.Group>
                                <Form.Control type="text" id="fundsForm" value={formObject.fundsAmount} name="fundsForm" onChange={handleInputChange} placeholder="Enter Amount of Funds" />
                                <Button variant="secondary" className="button" onClick={handleFormSubmit} >Add Funds!</Button>
                            </Form.Group>
                        </div>
                    </Col>
                    <Col sm={6} md={7} lg={8} xl={7} className="column2">
                        <h3 className="mt-3 text-center">Portfolio Distribution</h3>
                        <div className="mt-4 text-center">
                            <UserChart stocks={stocks} />
                        </div>
                        <Card className="mt-3 portfolioCont">
                            <Container>
                                <Card.Body>
                                    <Row>
                                        <Table>
                                            <thead>
                                                <tr className="trPortfolio">
                                                    <th>Stock Name</th>
                                                    <th># of Shares</th>
                                                    <th>Price Per Share</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {stocks.map((item) => {
                                                    return (
                                                        <tr>
                                                            <td><UserStocks stockName={item.symbol} /></td>
                                                            <td><UserShares stockShares={item.amount} /></td>
                                                            <td><UserSharesPrice price={price[item.symbol]} /></td>
                                                        </tr>
                                                    );
                                                })}
                                            </tbody>
                                        </Table>
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

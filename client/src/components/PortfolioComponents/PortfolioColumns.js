import React, { useEffect, useState } from "react";
import { Col, Container, Row, Table, Form, Button } from "react-bootstrap";
import UserChart from "../UserComponents/UserChart";
import UserPortfolioValue from "../UserComponents/UserPortfolioValue";
import UserStocks from "../UserComponents/UserStocks";
import UserShares from "../UserComponents/UserShares";
import UserSharesPrice from "../UserComponents/UserSharesPrice";
import UserBalance from "../UserComponents/UserBalance";
import "./columns.css";
import API from "../../utils/API";
import { useAuth } from "../../utils/auth";

function PortfolioColumns(props) {
    let [stocks, setStocks] = useState([]);
    let [price, setPrice] = useState({});
    let [userBalance, setUserBalance] = useState("");
    let [formObject, setFormObject] = useState({
        fundsForm: "",
    });

    const { user } = useAuth();
    useEffect(() => {
        API.getUser(user.id).then((res) => {
            setUserBalance(res.data.balance);
        });

        API.getUserStocks(props.username)
            .then((results) => {
                setStocks(results.data);
                let priceObj;
                for (let i = 0; i < results.data.length; i++) {
                    API.getStockBySymbol(results.data[i].symbol)
                        .then((response) => {
                            priceObj = {
                                ...priceObj,
                                [results.data[i].symbol]: response.data.c,
                            };
                            setPrice(priceObj);
                        })
                        .catch((error) => {
                            console.log(error);
                        });
                }
            })
            .catch((error) => console.log(error));
    }, []);

    function handleInputChange(event) {
        const { name, value } = event.target;
        setFormObject({ ...formObject, [name]: value });
    }

    function handleFormSubmit(event) {
        event.preventDefault();
        if (formObject.fundsForm) {
            let funds = +formObject.fundsForm;
            let total = +(funds.toFixed(2)) + +(userBalance.toFixed(2));
            API.setBalance(user.email, total)
                .then(() =>
                    setFormObject({
                        fundsForm: "",
                    })
                )
                .then(() =>
                    API.getUser(user.id).then((res) => {
                        setUserBalance(res.data.balance);
                    })
                );
        }
    }

    return (
        <div>
            <Container>
                <h2 className="mt-3 ">Your Portfolio</h2>
                <Row>
                    <Col>
                        <h3 className="mt-3 text-center">Portfolio Distribution</h3>
                        <div className="mt-4 text-center">
                            <UserChart stocks={stocks} />
                        </div>
                        <h3 className="mt-5 text-center">
                                $<UserPortfolioValue  price={price} stocks={stocks} /> Invested
                        </h3>
                    </Col>
                </Row>
                <Row className="mt-4">
                    <Col lg={6} xl={6} className="column1 mt-3">
                        <div className ="mt-5">
                            <h2 className="mt-3 text-center">
                                Total Balance
                        </h2>
                            <h3 className="mt-5 mb-3 text-center">
                                <UserBalance Balance={userBalance} />
                            </h3>
                            <div className="text-center mb-4">
                                <Form.Group>
                                    <Form.Control className="funds" type="text" id="fundsForm" value={formObject.fundsAmount} name="fundsForm" onChange={handleInputChange} placeholder="Enter Amount" />
                                </Form.Group>
                                <button className="button" onClick={handleFormSubmit} >Add Funds!</button>
                            </div>
                        </div>
                    </Col>
                    <Col lg={6} xl={6} className="column2">
                        <Container className="mt-3 portfolioCont">
                            <Row>
                                <Col>
                                    <Table className="mt-4">
                                        <thead>
                                            <tr className="trPortfolio">
                                                <th>Stock</th>
                                                <th>Shares</th>
                                                <th>Price </th>
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
                                </Col>
                            </Row>
                        </Container>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
export default PortfolioColumns;

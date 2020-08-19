import React, { useEffect, useState }  from "react";
import { Col } from "react-bootstrap";
import "../../PortfolioComponents/columns.css"
import API from "../../../utils/API";


function UserShares({ stockShares }) {
    let [stocks, setStocks] = useState([]);
    useEffect(() => {
        API.getUserStocks("test").then((results) => {
            setStocks(results.data);
        }).catch((error) => console.log(error));
    }, []);
    {
        stocks.map((item) => {
            return (<Col lg={3} className="test">
                <p className="userShares test">
                    {stockShares} = {item.amount}
                </p>
            </Col>
            );
        });
    }
}

export default UserShares;
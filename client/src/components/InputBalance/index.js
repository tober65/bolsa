import React, { useState, useEffect } from "react";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import "./inputbalance.css";
import API from "../../utils/API";
import { useAuth } from "../../utils/auth";

// class FundsForm extends Component {
//     state = {
//         addedFunds: ""
//     };

//     handleInputChange = event => {
//         let value = event.target.value;
//         const
//     }

//     handleFormSubmit = event => {
//         this.setState({
//             addedFunds: ""
//         });
//     };

//     render() {
//         return (
//             <div className="text-center">
//                 <Form.Group onSubmit={handleSubmit}>
//                     <Form.Control type="text" id="fundsForm" input = "addedFunds" value = {this.state.addedFunds} onChange = {this.handleInputChange} placeholder="Enter Amount of Funds" />
//                     <Button variant="secondary" className="button" type="submit" >Add Funds!</Button>
//                 </Form.Group>
//             </div>
//         )
//     }

// }


function InputBalance() {
//     let funds;
//     let [userName, setUsername] = useState("");
//     let [userBalance, setUserbalance] = useState("");
//     let [addedFunds, setAddedfunds] = useState("");
//     const { user } = useAuth();

//     const handleSubmit = event => {
//         event.preventDefault();
//         setAddedfunds(
//     };

//     useEffect(() => {
//         API.getUser(user.id).then((res) => {
//             setUsername(res.data.username);
//             setUserbalance(res.data.balance);
//         })

//         funds = userBalance + addedFunds;
//         API.setBalance({
//             username: userName,
//             amount: funds
//         })
//     });


    return (
        <div className="text-center">
            <Form.Group>
                <Form.Control type="text" id="fundsForm" value="" placeholder="Enter Amount of Funds" />
                <Button variant="secondary" className="button" type="submit" >Add Funds!</Button>
            </Form.Group>
        </div>
    )
}

export default InputBalance;


//user enters a number into the form
//submit it (click the add funds button)
//The funds they added is added to their total balance, and the balance that is displayed on the portfolio page updates with the new balance 
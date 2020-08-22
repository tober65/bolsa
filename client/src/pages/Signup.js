import React, { useState } from "react";
import { Link, Redirect, useHistory } from "react-router-dom";
import API from "./../utils/API";
import { useAuth } from "../utils/auth";
import { Form, InputGroup } from "../components/LoginForm";

const signupStyles = {
  maxWidth: "20rem",
  margin: "0 auto",
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
};

function Signup() {
  const [formState, setFormState] = useState({
    username: "",
    email: "",
    password: "",
  });

  const { isLoggedIn } = useAuth();

  const history = useHistory();

  if (isLoggedIn) {
    return <Redirect to="/" />;
  }

  const handleFormSubmit = (event) => {
    event.preventDefault();
    API.signUpUser(formState.username, formState.email, formState.password)
      .then((res) => {
        // once the user has signed up
        // send them to the login page
        history.replace("/login");
      })
      .catch((err) => alert(err));
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <div style={signupStyles} className="Signup">
      <h1>Signup</h1>
      <Form onSubmit={handleFormSubmit}>
        <InputGroup
          id="username"
          labelText="Username"
          placeholder="Username"
          name="username"
          type="text"
          onChange={handleChange}
          style={{
            backgroundColor: "#16162a",
            border: "2px solid #6565C2",
            color: "white",
          }}
        />
        <InputGroup
          id="email"
          labelText="Email"
          placeholder="name@email.com"
          name="email"
          type="email"
          onChange={handleChange}
          style={{
            backgroundColor: "#16162a",
            border: "2px solid #6565C2",
            color: "white",
          }}
        />
        <InputGroup
          id="pwd"
          labelText="Password"
          placeholder="Password"
          name="password"
          type="password"
          onChange={handleChange}
          style={{
            backgroundColor: "#16162a",
            border: "2px solid #6565C2",
            color: "white",
          }}
        />
        <button type="submit" class="border-gradient border-gradient-purple submit-button">
          Submit
        </button>
      </Form>
      <Link
        style={{
          marginTop: "1.5rem",
          textAlign: "center",
        }}
        to="/login"
      >
        Go to Login
      </Link>
    </div>
  );
}

export default Signup;

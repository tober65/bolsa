import React from "react";
import { useHistory } from "react-router-dom";
import { Container } from 'react-bootstrap'
import { useAuth } from "../../utils/auth";
import SearchBox from "../../components/SearchBox";
import "./dashboard.css";

function Dashboard() {
  // const { user, logout } = useAuth();
  // const history = useHistory();

  //const goToEditProfile = () => history.push("/portfolio");

  return (
    <Container>
      <h1>Dashboard</h1>
      <SearchBox />
    </Container>
  );
}

export default Dashboard;

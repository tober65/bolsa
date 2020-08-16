import React from "react";
import { useHistory } from "react-router-dom";
import "./dashboard.css";
import { useAuth } from "../../utils/auth";

function Dashboard() {
  const { user, logout } = useAuth();
  const history = useHistory();

  const goToEditProfile = () => history.push("/portfolio");

  return (
    <div className="Home">
    </div>
  );
}

export default Dashboard;

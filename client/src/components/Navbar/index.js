import React from "react";
import { NavLink } from "react-router-dom";
import { useAuth } from "../../utils/auth";
import logo from './moneylogo.svg';
import "./Navbar.css";

// NavLink adds "active" to className when path matches.

function Navbar() {
  const { isLoggedIn, logout } = useAuth();
  const links = [<BrandLink key="/" to="/brand" />];

  if (isLoggedIn) {
    links.push(
      <NavLink key="dashboard" exact className="nav-item" to="/">
        Dashboard
      </NavLink>
    );
    links.push(
      <NavLink key="profile" className="nav-item" to="/portfolio">
        Portfolio
      </NavLink>
    );
    links.push(
      <span key="logout" className="nav-item" onClick={logout}>
        Logout
      </span>
    );
  } else {
    links.push(
      <NavLink key="signup" className="nav-item" to="/signup">
        Sign Up
      </NavLink>
    );
    links.push(
      <NavLink key="login" className="nav-item" to="/login">
        Login
      </NavLink>
    );
  }
  return <nav className="Navbar">{links}</nav>;
}

function BrandLink(props) {
  return (
    <NavLink className="nav-item brand" exact {...props}>
     <img src= {logo} alt="money logo" className="navbar-logo"/>
    </NavLink>
  );
}

export default Navbar;
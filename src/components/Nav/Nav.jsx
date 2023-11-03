// Nav.js
import React from "react";
import { Link } from "react-router-dom";
import "./Nav.scss";
import Logo from "../../assets/img/logo.svg";

const Nav = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <Link to="/" className="logo-link">
          <img className="logo" src={Logo} alt="logo" width={135} height={40} />
        </Link>
        <ul className="nav-menu">
          <li className="nav-item">
            <Link to="/dashboard" className="nav-link">Dashboard</Link>
          </li>
          <li className="nav-item">
            <Link to="/settings" className="nav-link">Settings</Link>
          </li>
          <li className="nav-item">
            <Link to="/logout" className="nav-link">Logout</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
// Nav.js
import React from "react";
import { Link } from "react-router-dom";
import "./Nav.scss";
import Logo from "../../assets/img/logo.svg";

const Nav = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="no">
          <Link to="/" className="logo-link">
            <img
              className="logo"
              src={Logo}
              alt="logo"
              width={135}
              height={40}
            />
          </Link>
          <ul className={"nav-menu" ?? "nav-list"}>
            <li className="nav-item">
              <Link to="/dashboard" className="nav-link">
              Guruhlar
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/Foydalanuvchilar" className="nav-link">
              Foydalanuvchilar
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/logout" className="nav-link">
                Logout
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;

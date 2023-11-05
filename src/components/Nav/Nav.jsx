import React from "react";
import { NavLink } from "react-router-dom";
import "./Nav.scss";
import Logo from "../../assets/img/logo.svg";
// import userIcon from "../../assets/icon/users.svg";

const Nav = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="no">
          <NavLink to="/" className="logo-link">
            <img
              className="logo"
              src={Logo}
              alt="logo"
              width={135}
              height={40}
            />
          </NavLink>
          <ul className="nav-menu">
            <li className="nav-item">            
              <NavLink
                to="/dashboard"
                className="nav-link"
                activeClassName="active" // Add activeClassName
              >
                Guruhlar
              </NavLink>
            </li>
            <li className="nav-item">
              
              <NavLink
                to="/Foydalanuvchilar"
                className="nav-link"
                activeClassName="active" // Add activeClassName
              >
                Foydalanuvchilar
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/logout"
                className="nav-link"
                activeClassName="active" // Add activeClassName
              >
                Logout
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
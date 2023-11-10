import React from "react";
import { NavLink } from "react-router-dom";
import "./Nav.scss";
import Logo from "../../assets/img/logo.svg";
import userIcon from "../../assets/icon/user-add.svg";
import users from "../../assets/icon/users.svg";

const Nav = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="no">
          <NavLink to="/" className="logo-link">
            <img className="logo" src={Logo} alt="logo" width={135} height={40} />
          </NavLink>
          <ul className="nav-menu">
              <p className="auto">avtorizatsiya</p>
            <li className="nav-item">
              <NavLink to="/dashboard" className="nav-link">
                <img className="icon" src={userIcon} alt="userIcon" />
                <span className="link-text">Guruhlar</span>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/Foydalanuvchilar" className="nav-link">
              <img className="icon" src={users} alt="userIcon" />
                <span className="link-text">Foydalanuvchilar</span>
              </NavLink>
            </li>
          </ul>
          <p className="app-text">
          Mening ilovam
          </p>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
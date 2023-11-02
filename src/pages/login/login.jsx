import React from "react";
import "./login.scss";
import LoginImage from "../../assets/img/login.jpg";
import userImage from "../../assets/icon/usericon.svg";
import keyImage from "../../assets/icon/key.svg";

function Login() {
  return (
    <div className="container">
      <div className="wrapper-login">
        <img src={LoginImage} alt="login" width={"550"} />
        <form className="form" role={"form"}>
          <h2 className="login-text">Tizimga kirish</h2>
          <input type="email" className="login-email" placeholder="IP address" />
          <img className="icon-img" src={userImage} alt="user icon" width={"32"} height={"32"} />
          <input type="password" className="login-password" placeholder="Parol" />
          <img className="icon-img" src={keyImage} alt="user icon" width={"32"} height={"32"} />
          <button className="login-btn">Kirish</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
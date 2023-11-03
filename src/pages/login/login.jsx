import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./login.scss";
import LoginImage from "../../assets/img/login.jpg";
import userImage from "../../assets/icon/usericon.svg";
import keyImage from "../../assets/icon/key.svg";

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [ipAddress, setIpAddress] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
  
    // Create an object with the form data
    const formData = {
      ipAddress,
      password,
    };

    dispatch({ type: "SET_FORM_DATA", payload: formData });

  
    // Save the form data in localStorage
    localStorage.setItem("formData", JSON.stringify(formData));
  
    // Navigate to the header page
    navigate("/header");
  };
  return (
    <div className="container">
      <div className="wrapper-login">
        <img src={LoginImage} alt="login" width={"550"} />
        <form className="form" onSubmit={handleSubmit}>
          <h2 className="login-text">Tizimga kirish</h2>
          <input
            type="email"
            className="login-email"
            placeholder="IP address"
            value={ipAddress}
            onChange={(e) => setIpAddress(e.target.value)}
          />
          <img className="icon-img" src={userImage} alt="user icon" width={"32"} height={"32"} />
          <input
            type="password"
            className="login-password"
            placeholder="Parol"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <img className="icon-img" src={keyImage} alt="user icon" width={"32"} height={"32"} />
          <button type="submit" className="login-btn">
            Kirish
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
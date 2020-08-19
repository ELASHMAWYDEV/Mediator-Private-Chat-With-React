import React, { Component } from "react";
import LoginBox from "../../components/LoginBox/LoginBox";
import { Link } from "react-router-dom";

import "./Login.scss";

class Login extends Component {
  state = {};
  render() {
    return (
      <div className="loginContainer">
        <LoginBox />
        <div className="adminBtnContainer">
          <Link to="/admin/login">
            <button className="adminBtn">دخول المدير</button>
          </Link>
        </div>
      </div>
    );
  }
}

export default Login;

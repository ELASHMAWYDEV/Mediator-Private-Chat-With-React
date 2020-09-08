import React, { Component } from "react";
import LoginBox from "../../components/LoginBox/LoginBox";
// import { Link } from "react-router-dom";

import "./AdminLogin.scss";

class Login extends Component {
  state = {};
  render() {
    return (
      <div className="loginContainer">
        <LoginBox title="دخول المدير" placeholder="اسم المدير" />
      </div>
    );
  }
}

export default Login;

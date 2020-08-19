import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./LoginBox.scss";

class LoginBox extends Component {
  state = {};

  render() {
    return (
      <div className="loginBoxContainer">
        <h2>تسجيل الدخول</h2>
        <span className="separator"></span>
        <from>
          <div className="inputs">
            <input
              type="text"
              name="username"
              placeholder="اسم المستخدم المؤقت"
            />
            <input type="password" name="password" placeholder="كلمة المرور" />
          </div>
          <div className="submitBtnContainer">
            <button className="submitBtn" type="submit">
              تسجيل الدخول
            </button>
          </div>
        </from>
      </div>
    );
  }
}

export default LoginBox;

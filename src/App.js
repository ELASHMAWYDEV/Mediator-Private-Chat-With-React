import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

import "./App.scss";


//routes
import { Login, AdminLogin } from "./routes/index";

class App extends Component {
  state = {};
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" exact>
            <Redirect
              to={{
                pathname: "/login",
              }}
            />
          </Route>
          <Route path="/login" exact>
            <Login />
          </Route>
          <Route path="/admin/login" exact>
            <AdminLogin />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;

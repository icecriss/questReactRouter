import React, { Component } from "react";
import { Route, BrowserRouter, Switch, NavLink } from "react-router-dom";

import "./App.css";
import Home from "./components/Home";
import History from "./components/History";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <header className="App-header">
            <NavLink
              exact
              to="/"
              activeStyle={{
                color: "red"
              }}
            >
              {" "}
              Accueil{" "}
            </NavLink>
            <NavLink
              to="/notre-histoire"
              activeStyle={{
                color: "red"
              }}
            >
              {" "}
              History{" "}
            </NavLink>
          </header>

          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/notre-histoire" component={History} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

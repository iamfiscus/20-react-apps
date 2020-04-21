import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";
// components
import Tab from "./components/Tab";
// pages
import Home from "./pages/Home";
import About from "./pages/About";
import Features from "./pages/Features";

import "./App.css";

function App() {
  return (
    <Router>
      <div className="app">
        <div className="browser">
          <div className="tabs">
            <Tab>
              <NavLink to="/" activeClassName="is-active" exact="{true}">
                Home
              </NavLink>
            </Tab>
            <Tab>
              <NavLink to="/about" activeClassName="is-active">
                About
              </NavLink>
            </Tab>
            <Tab>
              <NavLink to="/features" activeClassName="is-active">
                Features
              </NavLink>
            </Tab>
          </div>

          <div className="viewport">
            <Switch>
              <Route path="/about">
                <About />
              </Route>
              <Route path="/features">
                <Features />
              </Route>
              <Route path="/" exact={true}>
                <Home />
              </Route>
            </Switch>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;

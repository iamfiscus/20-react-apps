import React from "react";
import { Switch, Route } from "react-router-dom";
// pages
import Home from "../pages/Home";
import About from "../pages/About";
import Features from "../pages/Features";

export default function Header() {
  return (
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
  );
}

import React from "react";
import Login from "./Pages/Login";
import Home from "./Pages/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Cart from "./Pages/Cart";
import SignUp from "./Pages/SignUp";
import Deliver from "./Pages/Deliver";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/signup">
          <SignUp />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/cart">
          <Cart />
        </Route>
        <Route exact path="/checkout">
          <Deliver />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

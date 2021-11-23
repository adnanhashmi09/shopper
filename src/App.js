import React from "react";
import Login from "./Pages/Login";
import Home from "./Pages/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Buypage from "./Pages/Buypage";
import Cart from "./Pages/Cart";
import SignIn from "./Pages/SignIn";
import Deliver from "./Pages/Deliver";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/login_in">
          <SignIn />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/buy/:id">
          <Buypage />
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

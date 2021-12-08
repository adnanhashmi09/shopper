import React from "react";
import { useState } from "react";
import Login from "./Pages/Login";
import Home from "./Pages/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Cart from "./Pages/Cart";
import SignUp from "./Pages/SignUp";
import Deliver from "./Pages/Deliver";
import Sell from "./Pages/Sell";
import Navbar from "./Components/Navbar";

function App() {
  const [auth, setAuth] = useState(false);
  
  const authHandler = (param) => {
    setAuth(param);
  };

  return (
    <Router>
      <Navbar login={auth} />
      <Switch>
        <Route path="/login">
          <Login authHandler={authHandler} />
        </Route>
        <Route path="/signup">
          <SignUp authHandler={authHandler} />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/cart">
          <Cart />
        </Route>
        <Route exact path="/deliver">
          <Deliver />
        </Route>
        <Route exact path="/sell">
          <Sell />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

import React, { useState } from "react";
import "../Styles/Main.css";
import data from "../data";
import Products from "./Products";
import Housedecgrid from "./Housedecgrid";
import Pcarousel from "./Pcarousel";

const Main = () => {
  const [market, setMarket] = useState(data);

  return (
    <>
      <div className="mup">
        <div className="pink"></div>
        <div className="peach"></div>
        <div className="blue"></div>
        <div className="green"></div>
      </div>

      <div className="i-header">
        <h1>Featured Products</h1>
        <p>Get the most trending items at reasonable prices</p>
      </div>

      <div className="prods1">
        <Products
          data={market}
        />
      </div>

      <div className="i-header2">
        <h1>Suggested For You</h1>
        <p>Based on your Shopping</p>
      </div>
      <Pcarousel
        data={market}
      />

      <div className="homedec">
        <h1>Make your House a Beautiful Place</h1>
      </div>
      <Housedecgrid data={market} />
    </>
  );
};

export default Main;

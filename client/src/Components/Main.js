import React, { useState } from "react";
import "../Styles/Main.css";
import data from "../data";
import Products from "./Products";
import Housedecgrid from "./Housedecgrid";
import Pcarousel from "./Pcarousel";
import Grocery from "./Grocery";
import Education from "./Education";

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
        <Products data={market} />
      </div>


      <div className="i-header" id="sprt">
        <h1>Stay Active with Latest Equipments</h1>
      </div>
      <Pcarousel data={market} />

      <div className="i-header" id="homedc">
        <h1>Make your House a Beautiful Place</h1>
      </div>
      <Housedecgrid data={market} />

      <div className="i-header" id="grcry">
        <h1>Fresh Grocery at Reasonable Prices</h1>
      </div>
      <Grocery data={market} />

      <div className="i-header" id="edctn">
        <h1>Get Enlightened with Great Books</h1>
      </div>
      <Education data={market} />


    </>
  );
};

export default Main;

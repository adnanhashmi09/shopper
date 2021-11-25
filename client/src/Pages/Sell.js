import React from "react";
import "../Styles/SignUp.css";
import { Link } from "react-router-dom";
import image1 from "../Assets/3.jpeg";
import '../Styles/Sell.css'

const Sell = () => {
  return (
    <>
      <section className="psect">
        <div className="ssmain">
          <div className="left">
            <img src={image1} alt="image" className="image" />
          </div>
          <div className="right">
            <div className="heading">
              <Link to="/" className="i">
                <h1 className="h">MARKET</h1>
              </Link>
            </div>
            <div className="intro">Welcome to Seller Portal</div>
            <div className="inp">
              <div className="linp">
                <form action="submit" className="sform">
                  <input type="text" placeholder="Product Name" required />
                  <select type="text" placeholder="Category" className="uinp">
                    <option disabled selected>
                      Category
                    </option>
                    <option>Sports</option>
                    <option>Decoration</option>
                    <option>Grocery</option>
                    <option>Education</option>
                  </select>
                  <input type="text" placeholder="Base Price" required />
                  <input type="text" placeholder="Selling Stock" required />
                  <label for="simg" className="limg">Select Product Image</label>
                  <input
                    type="file"
                    placeholder="Choose image"
                    required
                  />
                  <div className="button">
                    <Link to="/">
                      <input type="submit" value="Sell" className="signin" />
                    </Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Sell;

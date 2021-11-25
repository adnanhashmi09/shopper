import React from "react";
import '../Styles/SignUp.css';
import { Link } from "react-router-dom";
import image1 from "../Assets/3.jpeg";

const SignUp = () => {
  return (
    <>
      <section className="psect">
        <div className="ssmain">
          <div className="left">
            <img src={image1} alt="image" className="image" />
          </div>
          <div className="right">
            <div className="heading">
              <Link to='/' className="i">
                <h1 className="h">MARKET</h1>
              </Link>
            </div>
            <div className="intro">Welcome to Market</div>
            <div className="inp">
              <div className="linp">
                <form action="#" className="sform">
                  <input
                    type="text"
                    placeholder="Your Name"
                    required
                  />
                  <select
                    type="text"
                    placeholder="Continue as a ...?"
                    className="uinp"
                  >
                    <option disabled selected>Continue as a ...?</option>
                    <option>Buyer</option>
                    <option>Seller</option>
                  </select>
                  <input
                    type="email"
                    placeholder="Your email"
                    required
                  />
                  <input
                    type="text"
                    placeholder="Your Contact Number"
                    required
                  />
                  <input
                    type="text"
                    placeholder="Your Address"
                    required
                  />
                  <div className="button">
                    <Link to="/login">
                      <input type="submit" value="Sign Up" className="signin" />
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

export default SignUp;

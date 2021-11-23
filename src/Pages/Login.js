import React from 'react';
import '../Styles/Login.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
import image1 from "../Assets/3.jpeg";

const Login = () => {
    return (
      <section className="psect">
        <div className="lmain">
          <div className="left">
            <img src={image1} alt="image" className="image" />
          </div>
          <div className="right">
            <div className="heading">
              <h1 className="h">MARKET</h1>
            </div>
            <div className="intro">Welcome to Market</div>
            <div className="inp">
              <form action="#" className="form">
                <input type="text" placeholder="Your Name" className="uinp" />

                <input
                  type="password"
                  placeholder="Your Password"
                  className="linp"
                />
                <Link to="/">
                  <input type="submit" value="Sign In" className="signin" />
                </Link>
              </form>
            </div>

            <p className="or">
              <span>or</span>
            </p>
            <div className="wrapper">
              <div className="button">
                <FontAwesomeIcon
                  icon={faGoogle}
                  className="gicon"
                ></FontAwesomeIcon>
                <span className="gspan"> Sign in using Google</span>
              </div>
            </div>
            <div className="footer"></div>
          </div>
        </div>
      </section>
    );
}

export default Login

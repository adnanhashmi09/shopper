import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCreditCard } from "@fortawesome/free-regular-svg-icons";
import "../Styles/Deliver.css";
import Navbar from '../Components/Navbar';

const Deliver = () => {
  return (
    <>
      <Navbar />
      <div className="dmain">
        <h1 className="dheader">CHECKOUT</h1>
        <div className="dinfo">
          <div className="dsubinfo">
            <div className="cate">
              <div className="nos">01</div>
              <div className="nms">PERSONAL DETAILS</div>
            </div>
            <div className="inf">
              <form action="#" className="dform">
                <div className="up">
                  <input
                    type="text"
                    placeholder="First Name"
                    className="duinp"
                  />
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="duinp"
                  />
                </div>
                <div className="down">
                  <input type="email" placeholder="Email" className="dlinp" />
                  <input
                    type="tel"
                    placeholder="Contact Number"
                    className="dlinp"
                  />
                </div>
              </form>
            </div>
          </div>
          <div className="dsubinfo">
            <div className="cate">
              <div className="nos">02</div>
              <div className="nms">SHIPPING DETAILS</div>
            </div>
            <div className="inf">
              <form action="#" className="dform">
                <input type="text" placeholder="Shipping Address" />
                <input type="text" placeholder="Zip Code" />
                <input type="text" placeholder="City" />
              </form>
            </div>
          </div>
          <div className="dsubinfo">
            <div className="cate">
              <div className="nos">03</div>
              <div className="nms">PAYMENT DETAILS</div>
            </div>
            <div className="inf">
              <form action="#" className="dform">
                <input type="text" value="Shipping Address" />
                <input type="text" placeholder="Zip Code" />
                <input type="text" placeholder="City" />
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Deliver;

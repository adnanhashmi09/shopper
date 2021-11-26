import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCreditCard,
  faMoneyBillAlt,
} from "@fortawesome/free-regular-svg-icons";
import "../Styles/Deliver.css";
import Navbar from "../Components/Navbar";
import InputMask from "react-input-mask";

function CardNumberInput(props) {
  return(
  <InputMask
    mask='9999 9999 9999 9999'
    value={props.value}
    onChange={props.onChange}
    placeholder="Card Number"></InputMask>
  );
}

const Deliver = () => {
  const [payment, setPayment] = useState(null);
  const [number, setNumber] = useState('')

  const handleInput = ({target: { value }}) => setNumber(value);

  return (
    <>
      <Navbar />
      <div className="dheader">
        <h1>CHECKOUT</h1>
      </div>
      <div className="dmain">
        <div className="dleft">
          <div className="dinfo">
            <div className="dsubinfo">
              <div className="cate">
                <div className="nos">01</div>
                <div className="nms">PERSONAL DETAILS</div>
              </div>
              <div className="inf">
                <form action="#" className="dform">
                  <div className="up">
                    <div className="up1">
                      <input type="text" placeholder="First Name" required />
                    </div>
                    <div className="up2">
                      <input type="text" placeholder="Last Name" required />
                    </div>
                  </div>
                  <div className="down">
                    <div className="down1">
                      <input type="email" placeholder="Email" required />
                    </div>
                    <div className="down2">
                      <input type="tel" placeholder="Contact Number" required />
                    </div>
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
                  <div className="up">
                    <div className="up1">
                      <input
                        type="text"
                        placeholder="Shipping Address"
                        className="shiping"
                        required
                      />
                    </div>
                  </div>
                  <div className="down">
                    <div className="down1">
                      <input type="text" placeholder="Zip Code" required />
                    </div>
                    <div className="down2">
                      <input type="text" placeholder="City" required />
                    </div>
                  </div>
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
                  <div class="wrapper">
                    <input
                      type="radio"
                      name="select"
                      id="option-1"
                      onChange={() => setPayment(true)}
                    />
                    <input
                      type="radio"
                      name="select"
                      id="option-2"
                      onChange={() => setPayment(false)}
                    />
                    <label for="option-1" class="option option-1">
                      <div class="dot"></div>
                      <FontAwesomeIcon icon={faCreditCard}></FontAwesomeIcon>
                    </label>
                    <label for="option-2" class="option option-2">
                      <div class="dot"></div>
                      <FontAwesomeIcon icon={faMoneyBillAlt}></FontAwesomeIcon>
                    </label>
                  </div>
                  <div className={payment ? "active card" : "card"}>
                    <div className="up">
                      <div className="up1">
                        <input type="text" placeholder="Card Owner" />
                      </div>
                    </div>
                    <div className="down">
                      <div className="up2">
                        <CardNumberInput
                          value={number}
                          onChange={handleInput}
                        />
                      </div>
                    </div>
                  </div>
                  <input
                    type="submit"
                    value="Checkout And Buy"
                    className="signin"
                  />
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="dright">
          <h1>hello</h1>
        </div>
      </div>
    </>
  );
};

export default Deliver;

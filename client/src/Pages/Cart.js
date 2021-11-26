import React from "react";

import Navbar from "../Components/Navbar";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrash,
  faRupeeSign,
  faMinus,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";

import "../Styles/Cart.css";
import { useCart, useDispatchCart } from "../Context/Reducers";
import Checkout from "./Checkout";


const Cart = ({ product, idx, handleRemove}) => {


  const dispatch = useDispatchCart();

  const handleIncrement = () => {
    product.quantity = product.quantity + 1;
    console.log(product.quantity)
  }

  const handleDecrement = () => {
    product.quantity = product.quantity - 1;
  };

    return (
      <>
        <div className="imagec">
          <img src={product.image_src} alt="" className="imgc" />
        </div>
        <div className="productc">
          <div className="itemc">{product.name}</div>
          <div className="hashc">#4567RTT12</div>
          <div className="sellerc">{product.seller}</div>
        </div>
        <div className="pricec">
          <FontAwesomeIcon icon={faRupeeSign}></FontAwesomeIcon>
          {product.price}
        </div>
        <div className="qtyc">
          {/* <Button className="qtyb">
            <FontAwesomeIcon
              icon={faMinus}
              onClick={() => handleDecrement()}
            ></FontAwesomeIcon>
          </Button> */}
          <input type="number" />
          {/* <Button className="qtyb">
            <FontAwesomeIcon
              icon={faPlus}
              onClick={() => product.quantity + 1}
            ></FontAwesomeIcon>
          </Button> */}
        </div>
        {/* <div className="totc">{product.quantity * product.price}</div> */}
        <div className="remc">
          <FontAwesomeIcon
            icon={faTrash}
            color="red"
            size="2x"
            onClick={() => handleRemove(idx)}
          ></FontAwesomeIcon>
        </div>
      </>
    );
  
};

export default function Store() {
  const items = useCart();
  const dispatch = useDispatchCart();

  const handleRemove = (idx) => {
    dispatch({type: "REMOVE", idx});
  };

  const handleClearCart = () => {
    dispatch({type: "CLEAR"});
  }

  if (items.length === 0) {
    return (
      <>
      <Navbar />
      <main className="ecart">
        <p>Cart is empty</p>
      </main>
      </>
    );
  }
  return (
    <>
      <Navbar />
      <h1 className="header">CART</h1>
      <div className="cmain">
        <div className="left">
          <div className="subleft">
            {items.map((item, idx) => (
              <div className="sleft">
                <Cart
                  handleRemove={handleRemove}
                  key={idx}
                  idx={idx}
                  product={item}
                />
              </div>
            ))}
          </div>
          <div className="clearcart">
            <button onClick={handleClearCart} className="ccbtn">
              {" "}
              Clear Cart
            </button>
          </div>
        </div>
        <div className="right">
          <div className="subright">
            <Checkout />
          </div>
        </div>
      </div>
    </>
  );
}

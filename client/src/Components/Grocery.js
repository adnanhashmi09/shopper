/* eslint-disable array-callback-return */
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRupeeSign, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "../Styles/Grocery.css";

import { useDispatchCart } from "../Context/Reducers";

const Grocery = ({ data }) => {
  const dispatch = useDispatchCart();

  const addToCart = (item) => {
    dispatch({ type: "ADD", item });
  };

  const settings = {
    centerMode: true,
  centerPadding: '60px',
  slidesToShow: 1,
  };

  return (
    <div className="gcontainer">
      <Slider {...settings}>
        {data.map((product) => {
          const { p_id, name, description, category, seller, price } =
            product;
          if (true) {
            return (
              <div key={p_id} className="pp-item">
                <img src={`http://localhost:5000/${description}`} alt="desc" className="pp-image" />
                <Link to={`/buy/${p_id}`} style={{ textDecoration: "none" }}>
                  <div className="pitem-info">
                    <div className="pupper">
                      <h4 className="pitem-header">{name}</h4>
                      <h4 className="pprice">
                        <FontAwesomeIcon icon={faRupeeSign}></FontAwesomeIcon>
                        {price}
                      </h4>
                      <p className="pseller">{seller}</p>
                    </div>
                    <h5>{category}</h5>
                  </div>
                  <Link to="/cart">
                    <FontAwesomeIcon
                      icon={faShoppingCart}
                      onClick={() => addToCart(product)}
                    ></FontAwesomeIcon>
                  </Link>
                </Link>
              </div>
            );
          }
        })}
      </Slider>
    </div>
  );
};

export default Grocery;

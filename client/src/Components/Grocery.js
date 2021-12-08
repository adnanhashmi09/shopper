/* eslint-disable array-callback-return */
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "../Styles/Grocery.css";

import { useDispatchCart } from "../Context/Reducers";

const Grocery = ({ data }) => {
  const dispatch = useDispatchCart();

  const addToCart = (item) => {
    item.quantity = 1;
    dispatch({ type: "ADD", item });
  };

  const settings = {
    centerMode: true,
    centerPadding: '100px',
    slidesToShow: 4,
    slidesToScroll: 1,
  };

  return (
    <div className="gcontainer">
      <Slider {...settings}>
        {data.map((product) => {
          const { name, image, category } =
            product;
          if (category === 'Grocery') {
            return (
              <div key={name} className="pp-item">
                <img src={image} alt="desc" className="pp-image gimage" />
                  <div className="pitem-info">
                    <div className="pupper">
                      <h4 className="pitem-header">{name}</h4>
                    </div>
                    <h5>{category}</h5>
                  </div>
                  <Link to="/cart">
                    <FontAwesomeIcon
                      icon={faShoppingCart}
                      onClick={() => addToCart(product)}
                    ></FontAwesomeIcon>
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

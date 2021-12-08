import React, { useState } from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { useDispatchCart } from '../Context/Reducers';

import "../Styles/Housedec.css";
import { Link } from "react-router-dom";

const Education = ({ data }) => {
  const dispatch = useDispatchCart();
  
  const addToCart = (item) => {
    item.quantity = 1;
    dispatch({ type: "ADD", item});
  };

  const settings = {
    centermode: true,
    centerpadding: "20px",
    slidesToShow: 5,
    slidesToScroll: 1,
    dots: true,
    autoplay: true,
    autoplaySpeed: 1000,  
  };

  return (
    <div className="fcontainer">
      <Slider {...settings}>
        {data.map((product, idx) => {
          const { name, category, image} =
            product;
          if (category === 'Books') {
            return (
              <article
                key={name}
                className="slide"
              >
                <Link to="/cart">
                  <img src={image} alt={name} className="fimage" onClick={() => addToCart(product)}/>
                </Link>
                <div className="fitem-info">
                  <h4 className="fitem-header">{name}</h4>
                </div>
              </article>
            );
          }
        })}
      </Slider>
    </div>
  );
};

export default Education;

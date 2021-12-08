import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRupeeSign, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "../Styles/Pcarousel.css";

import { useDispatchCart } from "../Context/Reducers";

const Pcarousel = ({ data }) => {
  const dispatch = useDispatchCart();

  const addToCart = (item) => {
    item.quantity = 1;
    dispatch({ type: "ADD", item });
  };

  const settings = {
    slidesToShow: 6,
    slidesToScroll: 3,
    centermode: true,
    centerpadding: "20px",
    dots: true,
  };

  return (
    <div className="pcontainer">
      <Slider {...settings}>
        {data.map((product) => {
          const { name, image, category, price } = product;
          if (category === 'Sports') {
            return (
              <div key={name} className="pp-item">
                <img src={image} alt="desc" className="pp-image" />
                <Link to={`/buy/${name}`} style={{ textDecoration: "none" }}>
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
                </Link>
              </div>
            );
          }
        })}
      </Slider>
    </div>
  );
};

export default Pcarousel;

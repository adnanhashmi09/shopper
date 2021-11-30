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
    slidesToShow: 6,
    slidesToScroll: 1,
    centermode: true,
    centerpadding: "20px",
    autoplay: true,
    autoplaySpeed: 4000
  };

  return (
    <div className="gcontainer">
      <Slider {...settings}>
        {data.map((product) => {
          const { id, name, image_src, seller, category, price, quantity } =
            product;
          if (id >=21 && id <= 30) {
            return (
              <div key={id} className="pp-item">
                <img src={image_src} alt="desc" className="pp-image" />
                <Link to={`/buy/${id}`} style={{ textDecoration: "none" }}>
                  <div className="pitem-info">
                    <div className="pupper">
                      <h4 className="pitem-header">{name}</h4>
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

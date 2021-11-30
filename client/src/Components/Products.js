import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRupeeSign, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import '../Styles/Products.css';

import { useDispatchCart } from '../Context/Reducers';

const Products = ({data}) => {

  const dispatch = useDispatchCart();

  const addToCart = (item) => {
    dispatch({ type: "ADD", item});
  };

    return (

        <div className="item">
            {data.map((product) => {
              const { id, name, image_src, seller, category, price, quantity } = product;
              if (id >= 13 && id <= 15){
                return (
                  <article className="p-item">
                    <img src={image_src} alt="desc" className="p-image" />
                    <div className="item-info">
                      <div className="upper">
                        <Link
                          to={`/buy/${id}`}
                          style={{ textDecoration: "none" }}
                        >
                          <h4 className="item-header">{name}</h4>
                        </Link>
                        <p className="seller">{seller}</p>
                      </div>
                      <h5>{category}</h5>
                      <Link to="/cart">
                        <FontAwesomeIcon
                          icon={faShoppingCart}
                          onClick={() => addToCart(product)}
                        ></FontAwesomeIcon>
                      </Link>
                    </div>
                  </article>
                );
              }
            })}
        </div>

    );
}

export default Products


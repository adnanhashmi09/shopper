import React from 'react';
import { useParams } from 'react-router';

import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import '../Styles/Buypage.css';


const Buypage = () => {

    const { id } = useParams();

    const settings = {
      slidesToShow: 1,
      slidesToScroll: 1,
      centermode: true,
      centerpadding: "20px",
      dots: true,
      fade: true
    };

    return (
      <section className="main">
        <div className="container">
          <div className="right">
            <h1>{id}</h1>
            {/* <h1>{category}</h1>
            <h1>{seller}</h1>
            <h1>{item}</h1>
            <h1>{price}</h1> */}
          </div>
        </div>
      </section>
    );
}

export default Buypage

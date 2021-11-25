import React , {useState} from 'react';
import Slider from 'react-slick';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRupeeSign } from '@fortawesome/free-solid-svg-icons';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import '../Styles/Housedec.scss';
import { Link } from 'react-router-dom';

const Housedecgrid = ({data}) => {

  const [imageIndex, setImageIndex] = useState(1);
 


    const settings = {
      centermode: true,
      centerpadding: "20px",
      slidesToShow: 3,
      slidesToScroll: 1,
      dots: true,
      autoplay: true,
      autoplaySpeed: 1000,
    
      beforeChange: function(current, next) {
        // if(current === 5){
        //   setImageIndex(0);
        // }
        setImageIndex(next );
      }
    };

    return (
      <div className="fcontainer">
        
          <Slider {...settings}>
            {data.map((product, idx) => {
              const { id, name, image_src, seller, category, price, quantity } = product;
              if (id >= 16 && id <=20){
                return (
                  <article
                    key={id}
                    className={idx === imageIndex + 1 ? "activeSlide" : "slide"}
                  >
                    <Link to="/buy">
                      <img src={image_src} alt={name} className="fimage" />
                    </Link>
                    <div className="fitem-info">
                      <h4 className="fitem-header">{name}</h4>
                      <h4 className="fprice">
                        <FontAwesomeIcon icon={faRupeeSign}></FontAwesomeIcon>
                        {price}
                      </h4>
                      <h4>{idx}</h4>
                      <h4>IKEA</h4>
                    </div>
                  </article>
                );
              }
            })}
          </Slider>
      </div>
    );
}

export default Housedecgrid

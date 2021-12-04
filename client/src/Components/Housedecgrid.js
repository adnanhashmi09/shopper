import React , {useState} from 'react';
import Slider from 'react-slick';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRupeeSign } from '@fortawesome/free-solid-svg-icons';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import '../Styles/Housedec.css';
import { Link } from 'react-router-dom';

const Housedecgrid = ({data}) => {

  const [imageIndex, setImageIndex] = useState(1);
 


    const settings = {
      centermode: true,
      centerpadding: "20px",
      slidesToShow: 4,
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
              const { name, image, category } = product;
              if (category === 'Decoration'){
                return (
                  <article
                    key={name}
                    className={idx === imageIndex + 1 ? "activeSlide" : "slide"}
                  >
                    <Link to="/buy">
                      <img src={image} alt={name} className="fimage himg" />
                    </Link>
                    <div className="fitem-info">
                      <h4 className="fitem-header">{name}</h4>
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

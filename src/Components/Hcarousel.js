import React from 'react';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import '../Styles/Carousel.css';

const Carousel = (images) => {

    const settings = {
        infinte: true,
        dots: true,
        slidesToShow: 1,
        arrows: false,
        slidesToScroll: 1,
        lazyLoad: false,
        autoplay: true,
        autoplaySpeed: 2000,
        fade: true,
        centerPadding:0,
        centerMode:true,
    };

    return (
      <div className='icontainer'>
        <Slider {...settings}>
          {images.map((imge) => {
              const {id, name, src} = imge;
              return(
                <div key={id} className="image">
                  <img src={src} alt="" />
                </div>
              );
            })
          }
        </Slider>
      </div>
    );
};

export default Carousel;


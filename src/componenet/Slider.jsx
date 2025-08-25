import React from 'react';
import Slider from 'react-slick';
import { Box } from '@mui/material';



const SliderComponent = ({data, autoplaySpeed,speed}) => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: autoplaySpeed,
    speed: speed,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    pauseOnHover: true,
    fade: true,
    cssEase: 'ease-in-out',
  };

  return (
    <Box sx={{ width: '100%', overflow: 'hidden', position: 'relative', marginTop: "0px" }}>
      <Slider {...settings}>
        {data.map((img, index) => (
          <Box key={index} className="slider-item">
            <img
              src={img.image}
              alt={`slide-${index}`}
              className={img.style}
            />
          </Box>
        ))}
      </Slider>
    </Box>

  );
};

export default SliderComponent;

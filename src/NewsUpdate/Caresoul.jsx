import React from 'react';
// import CarouselCard from './CarouselCard';
import carlie from '../images/carlie.jpg';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import CarouselCard from './CarouselCard';

const Caresoul = () => {
  const CarouselCardData = [
    { id: 1, title: "Claire's Story", desc: `I don’t like asking for help…but I decided to give Charity Advice a
    call and I'm so glad I did.`, image: carlie, names: "Claire N" },
    { id: 2, title: "Moresa' s Story ", desc: `I don’t like asking for help…but I decided to give Charity Advice a
    call and I'm so glad I did.`, image: carlie, names: "Moresa" },
  ];
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay:true,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite:true
        }
      }
    ]
  };

  return (
    <div>
    
    <Slider {...settings}>
  {CarouselCardData?.map((item, index) => (
    <div key={index}>
     <CarouselCard {...item}/>
    </div>
  ))}
</Slider>
  </div>
  );
};

export default Caresoul;

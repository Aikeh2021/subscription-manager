import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const CarouselComp = ({image1, image2, image3, image4, image5, image6}) => {
  
  return (
    <div className="carousel-wrapper" >
      <Carousel infiniteLoop useKeyboardArrows autoPlay showStatus={false} showThumbs={false} showArrows={false} stopOnHover={false} > 
      <div>
        <img src={image1} alt="Carousel Item"/>
      </div>
      <div>
        <img src={image2} alt="Carousel Item" />
      </div>
      <div>
        <img src={image3} alt="Carousel Item" />
      </div>
      <div>
        <img src={image4} alt="Carousel Item" />
      </div>
      <div>
        <img src={image5} alt="Carousel Item" />
      </div>
      <div>
        <img src={image6} alt="Carousel Item" />
      </div>
      </Carousel>
    </div>
  );
};

export default CarouselComp;

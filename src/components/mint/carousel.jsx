import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./carousel.css"
import IMAGE1 from '../../assets/image1.jpg'
import IMAGE2 from '../../assets/image2.jpg'
import IMAGE3 from '../../assets/image3.jpg'
import IMAGE4 from '../../assets/image4.jpg'
import IMAGE5 from '../../assets/image5.jpg'
import IMAGE6 from '../../assets/image6.jpg'
import IMAGE7 from '../../assets/image7.jpg'
import IMAGE8 from '../../assets/image8.jpg'
import IMAGE9 from '../../assets/image9.jpg'

const SimpleCarousel = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const images1 = [
    { src: IMAGE1 },
    { src: IMAGE2 },
    { src: IMAGE3 },
    { src: IMAGE4 },
    { src: IMAGE5 },
    { src: IMAGE6 },
    { src: IMAGE7 },
    { src: IMAGE8 },
    { src: IMAGE9 },
  ];


  return (
    <div className="simple__carousel">
      <Carousel responsive={responsive} >
        {images1.map((image, index) => (
          <div key={index} >
            <img src={image.src} alt={`image${index + 1}`} />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default SimpleCarousel;

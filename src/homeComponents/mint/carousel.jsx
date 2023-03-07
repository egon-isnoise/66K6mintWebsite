import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./carousel.css"
// import IMAGE1 from '../../assets/image1.png'
// import IMAGE2 from '../../assets/image2.png'
// import IMAGE3 from '../../assets/image3.png'
// import IMAGE4 from '../../assets/image4.png'
// import IMAGE5 from '../../assets/image5.png'
// import IMAGE6 from '../../assets/image6.png'
// import IMAGE7 from '../../assets/image7.png'
// import IMAGE8 from '../../assets/image8.png'
// import IMAGE9 from '../../assets/image9.png'
// import IMAGE10 from '../../assets/image10.png'
// import IMAGE11 from '../../assets/image11.png'
// import IMAGE12 from '../../assets/image12.png'
// import IMAGE13 from '../../assets/image13.png'
// import IMAGE14 from '../../assets/image14.png'
// import IMAGE15 from '../../assets/image15.png'

const MultiCarousel = () => {
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
    // { src: IMAGE1 },
    // { src: IMAGE2 },
    // { src: IMAGE3 },
    // { src: IMAGE4 },
    // { src: IMAGE5 },
  ];

  const images2 = [
    // { src: IMAGE6 },
    // { src: IMAGE7 },
    // { src: IMAGE8 },
    // { src: IMAGE9 },
    // { src: IMAGE10 },
  ];

  const images3 = [
    // { src: IMAGE11 },
    // { src: IMAGE12 },
    // { src: IMAGE13 },
    // { src: IMAGE14 },
    // { src: IMAGE15 },
  ];

  return (
    <div className="multi__carousel">
      <Carousel responsive={responsive} vertical={true}>
        {images1.map((image, index) => (
          <div key={index}>
            <img src={image.src} alt={`image${index + 1}`} />
          </div>
        ))}
      </Carousel>

      <Carousel responsive={responsive} vertical={true}>
        {images2.map((image, index) => (
          <div key={index}>
            <img src={image.src} alt={`image${index + 6}`} />
          </div>
        ))}
      </Carousel>

      <Carousel responsive={responsive} vertical={true}>
        {images3.map((image, index) => (
          <div key={index}>
            <img src={image.src} alt={`image${index + 11}`} />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default MultiCarousel;

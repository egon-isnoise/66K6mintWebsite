import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./videoCarousel.css"

const VideoCarousel = () => {
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

  const videos = [
    { id: "taAa3uWPm2o", title: "Video 1" },
    { id: "taAa3uWPm2o", title: "Video 2" },
    { id: "taAa3uWPm2o", title: "Video 3" },
    { id: "taAa3uWPm2o", title: "Video 4" },
    { id: "taAa3uWPm2o", title: "Video 5" },
    { id: "taAa3uWPm2o", title: "Video 6" },
  ];


  return (
    <div className="video__carousel">
      <Carousel responsive={responsive} >
      {videos.map((video, index) => (
        <div key={index} className="video__carousel__item">
          <iframe
            width="100%"
            height="315"
            src={`https://www.youtube.com/embed/${video.id}`}
            title={video.title}
            // frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      ))}
      </Carousel>
    </div>
  );
};

export default VideoCarousel;

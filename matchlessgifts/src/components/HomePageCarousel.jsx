import React, { useEffect } from "react";
import { Carousel, initMDB } from "mdb-ui-kit";
import { useState } from "react";

const HomePageCarousel = () => {
  const [showGreenDiv, setShowGreenDiv] = useState(true);
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    // Initialize MDB Carousel after the component mounts
    initMDB({ Carousel });

    // Set interval to change slide every 1 second
    const intervalId = setInterval(() => {
      setShowGreenDiv(false);
      setActiveSlide((prevSlide) => (prevSlide + 1) % 3);
    }, 3000);

    return () => {
      // Clear the interval when the component is unmounted
      clearInterval(intervalId);
    };
  }, []);

  const handlePrevClick = () => {
    setShowGreenDiv(false);
    setActiveSlide((prevSlide) => (prevSlide - 1 + 3) % 3);
  };

  const handleNextClick = () => {
    setShowGreenDiv(false);
    setActiveSlide((prevSlide) => (prevSlide + 1) % 3);
  };

  const carouselImages = [
    "src/assets/watchcarousel.webp",
    "src/assets/menfashion.webp",
    "src/assets/clothescarousel.webp",
  ];

  const title = ["Classic Watches", "Men's special", "1000+ varieties"];
  const subtitle = [
    "For all age range",
    "Fashion forwarded choices",
    "A Multitude of Fashion",
  ];

  return (
    <div
      id="carouselMaterialStyle"
      className="carousel slide carousel-fade"
      data-mdb-ride="carousel"
      data-mdb-carousel-init
    >
      {/* Indicators */}
      <div className="carousel-indicators">
        {Array.from({ length: 3 }, (_, index) => (
          <button
            key={index}
            type="button"
            data-mdb-target="#carouselMaterialStyle"
            data-mdb-slide-to={index}
            className={activeSlide === index ? "active" : ""}
            aria-current={activeSlide === index ? "true" : undefined}
            aria-label={`Slide ${index + 1}`}
          ></button>
        ))}
      </div>

      {/* Inner */}
      <div className="carousel-inner rounded-5 shadow-4-strong">
        {/* Single item */}
        {carouselImages.map((image, index) => (
          <div
            key={index}
            className={`carousel-item ${activeSlide === index ? "active" : ""}`}
          >
            <img
              src={image}
              className="d-block w-100"
              alt={`Slide ${index + 1}`}
            />
            <div
              className={`carousel-caption d-none d-md-block ${
                showGreenDiv ? "bg-success" : ""
              }`}
            >
              <div>
                <h5>{title[index]}</h5>
                <p>{subtitle[index]}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Inner */}

      {/* Controls */}
      <button
        className="carousel-control-prev"
        type="button"
        data-mdb-target="#carouselMaterialStyle"
        data-mdb-slide="prev"
        onClick={handlePrevClick}
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-mdb-target="#carouselMaterialStyle"
        data-mdb-slide="next"
        onClick={handleNextClick}
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default HomePageCarousel;

import React, { useState, useEffect } from "react";
import Slide from "./components/Slide";
import "./styles.css";

function HorizontalSlideShow({ slides }) {
  const [currentIndex, setCurrentIdex] = useState(1);

  const handleSlideClick = (index) => {
    if (index !== currentIndex) {
      setCurrentIdex(index);
    }
  };

  const averageIndex = Math.ceil(slides.length / 2) * (100 / slides.length);
  const wrapperTransform = {
    transform: `translateX(${-(
      currentIndex * (100 / slides.length) -
      averageIndex
    )}%)`,
  };

  return (
    <div className="slider">
      <ul className="slider__wrapper" style={wrapperTransform}>
        {slides.map((slide) => (
          <Slide
            key={slide.index}
            currentIndex={currentIndex}
            slide={slide}
            onSlideClick={handleSlideClick}
          />
        ))}
      </ul>
    </div>
  );
}

export default HorizontalSlideShow;

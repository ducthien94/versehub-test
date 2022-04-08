import React from "react";

function Slide({ slide, onSlideClick, currentIndex }) {
  const { index, imgSrc, content } = slide;
  let classNames = "slide";

  if (currentIndex === index) classNames += " slide--current";
  else if (currentIndex - 1 === index) classNames += " slide--prev";
  else if (currentIndex + 1 === index) classNames += " slide--next";

  return (
    <li className={classNames}>
      <img
        className="slide__image-wrapper"
        src={imgSrc}
        onClick={() => {
          onSlideClick(index);
        }}
      />
      {currentIndex === index && (
        <div className="slide__content">{content}</div>
      )}
    </li>
  );
}

export default Slide;

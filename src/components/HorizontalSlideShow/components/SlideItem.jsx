import React, { forwardRef } from "react";

const SlideItem = forwardRef((props, ref) => {
  const { slide, isActive, onItemClick, activeIndex, animationType } = props;
  const { index, content, imgSrc } = slide;
  let classNames = "slide";

  if (isActive) {
    classNames += " slide--active";
  }

  if (activeIndex - 1 === index || activeIndex + 1 === index) {
    classNames += " slide--level1";
  }

  let animation;
  if (animationType === "slideToLeft") {
    animation = {
      animation: `slideToLeft 1s`,
    };
  } else if (animationType === "slideToRight") {
    animation = {
      animation: `slideToRight 1s`,
    };
  }

  return (
    <li ref={ref} className={classNames} style={animation}>
      <div onClick={() => onItemClick(index)} className="slide__image-wrapper">
        <img src={imgSrc} alt="" className="slide__image" />
      </div>
      {isActive && <div className="slide__content">{content}</div>}
    </li>
  );
});

export default SlideItem;

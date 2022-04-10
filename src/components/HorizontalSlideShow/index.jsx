import React, { useState, useEffect, useRef } from "react";
import SlideItem from "./components/SlideItem";
import "./styles.css";

function HorizontalSlideShow({ data }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [translate, setTranslate] = useState(null);
  const [animationType, setAnimationType] = useState("slideToLeft");
  const slideItemRef = useRef();

  useEffect(() => {
    let translateValue = slideItemRef.current.offsetWidth / 2;
    let slideItemWidth = translateValue * 2;
    let translate =
      activeIndex === 0
        ? translateValue
        : translateValue - activeIndex * slideItemWidth;
    setTranslate(translate);
  }, [activeIndex]);

  let totalTranslateValue;
  if (slideItemRef.current) {
    totalTranslateValue = slideItemRef.current.offsetWidth + activeIndex * 30; //30 là tổng margin 2 bên của mỗi item
  }

  return (
    <>
      <div
        className="slider"
        style={{
          transform: `translateX(${translate}px) translateX(calc(50% - ${totalTranslateValue}px))`,
        }}
      >
        <ul className="slider-wrapper">
          {data.map((it, i) => {
            return (
              <SlideItem
                key={i}
                ref={slideItemRef}
                slide={it}
                activeIndex={activeIndex}
                isActive={activeIndex === i}
                onItemClick={setActiveIndex}
                animationType={animationType}
              />
            );
          })}
        </ul>
        <div className="slide__control">
          <span
            className="slide__btn slide__btn--prev"
            onClick={() => {
              setAnimationType("slideToRight");
              if (activeIndex === 0) {
                setActiveIndex(data.length - 1);
              } else {
                setActiveIndex((activeIndex) => activeIndex - 1);
              }
            }}
          >
            <i className="fa fa-chevron-left" aria-hidden="true"></i>
          </span>
          <span
            className="slide__btn slide__btn--next"
            onClick={() => {
              setAnimationType("slideToLeft");
              if (activeIndex + 1 === data.length) {
                setActiveIndex(0);
              } else {
                setActiveIndex((activeIndex) => activeIndex + 1);
              }
            }}
          >
            <i className="fa fa-chevron-right" aria-hidden="true"></i>
          </span>
        </div>
      </div>
    </>
  );
}

export default HorizontalSlideShow;

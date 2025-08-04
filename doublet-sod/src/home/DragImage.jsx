import React, { useEffect, useRef, useState } from "react";
import "./DragImage.css";
import Before from "../assets/before.jpg";
import After from "../assets/after.jpg";

const DragImage = ({ onImagesLoaded }) => {
  const [beforeLoaded, setBeforeLoaded] = useState(false);
  const [afterLoaded, setAfterLoaded] = useState(false);

  useEffect(() => {
    if (beforeLoaded && afterLoaded && onImagesLoaded) {
      onImagesLoaded();
    }
  }, [beforeLoaded, afterLoaded, onImagesLoaded]);

  const [sliderValue, setSliderValue] = useState(50);
  const [isPaused, setIsPaused] = useState(false);
  const directionRef = useRef(1);
  const manualChangeRef = useRef(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (isPaused || manualChangeRef.current) return;

      setSliderValue((prev) => {
        let next = prev + directionRef.current * 0.5;
        if (next >= 90 || next <= 10) {
          directionRef.current *= -1;
        }
        return next;
      });
    }, 30);

    return () => clearInterval(interval);
  }, [isPaused]);

  const handleSliderChange = (e) => {
    setSliderValue(parseFloat(e.target.value));
    manualChangeRef.current = true;
    setIsPaused(true);
  };

  const handleMouseUp = () => {
    manualChangeRef.current = false;
  };

  const togglePause = () => {
    setIsPaused(true);
  };

  return (
    <div
      className="slider-container"
      onMouseUp={handleMouseUp}
      onTouchEnd={handleMouseUp}
    >
      <div className="slider-image-wrapper" onClick={togglePause}>
        <div className="label before-label"><p>Before</p></div>
        <div className="label after-label"><p>After</p></div>

        <img
          src={Before}
          alt="Before"
          className="slider-image"
          loading="eager"
          fetchpriority="high"
          onLoad={() => setBeforeLoaded(true)}
        />
        <div
          className="slider-image after"
          style={{ clipPath: `inset(0 ${100 - sliderValue}% 0 0)` }}
        >
          <img
            src={After}
            alt="After"
            className="slider-image"
            loading="eager"
            fetchpriority="high"
            onLoad={() => setAfterLoaded(true)}
          />
        </div>

        <div className="slider-handle" style={{ left: `${sliderValue}%` }}>
          <div className="arrow">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 256 256"
              className="my-icon"
            >
              <path d="M136,40V216a8,8,0,0,1-16,0V40a8,8,0,0,1,16,0ZM96,120H35.31l18.35-18.34A8,8,0,0,0,42.34,90.34l-32,32a8,8,0,0,0,0,11.32l32,32a8,8,0,0,0,11.32-11.32L35.31,136H96a8,8,0,0,0,0-16Zm149.66,2.34-32-32a8,8,0,0,0-11.32,11.32L220.69,120H160a8,8,0,0,0,0,16h60.69l-18.35,18.34a8,8,0,0,0,11.32,11.32l32-32A8,8,0,0,0,245.66,122.34Z"></path>
            </svg>
          </div>
        </div>
      </div>
      <label htmlFor="before-after-slider" className="visually-hidden">
        Before and After Image Slider
      </label>
      <input
        id="before-after-slider" // Added a unique ID
        type="range"
        min="0"
        max="100"
        value={sliderValue}
        onChange={handleSliderChange}
        className="slider-range"
      />
    </div>
  );
};

export default DragImage;

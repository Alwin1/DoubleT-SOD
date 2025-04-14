import React, { useState } from 'react';
import './DragImage.css';
import Before from '../assets/before.jpg'
import After from '../assets/after.jpg'

const DragImage = () => {
  const [sliderValue, setSliderValue] = useState(50);

  const handleSliderChange = (e) => {
    setSliderValue(e.target.value);
  };

  return (
    <div className="slider-container">
      <div className="slider-image-wrapper">
        <img src={After} alt="Before" className="slider-image" />
        <div
          className="slider-image after"
          style={{ clipPath: `inset(0 ${100 - sliderValue}% 0 0)` }}
        >
          <img src={Before} alt="After" className="slider-image" />
        </div>
      </div>
      <input
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

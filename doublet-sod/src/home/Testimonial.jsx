import React, { useState, useEffect, useRef } from "react";
import "./Testimonial.css";
import QuoteLeft from '../assets/quotation-left.png';
import QuoteRight from '../assets/quotation-right.png';


const testimonials = [
  {
    text: "The team at [Your Company] installed my new air conditioner quickly and professionally. They were courteous, efficient, and explained everything clearly. I’m already seeing a drop in my energy bills. Highly recommend!",
    name: "John Smith",
    location: "Tempe, AZ",
  },
  {
    text: "Great service! The installation was smooth, and the team was very professional. I highly recommend them for any HVAC needs.",
    name: "Jane Doe",
    location: "Phoenix, AZ",
  },
  {
    text: "Exceptional customer service and top-notch installation. My house has never been this comfortable!",
    name: "Mike Johnson",
    location: "Scottsdale, AZ",
  },
];

const TestimonialSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const startX = useRef(null);
  const sliderRef = useRef();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  // Touch Handlers
  const handleTouchStart = (e) => {
    startX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    if (!startX.current) return;
    const endX = e.touches[0].clientX;
    const diff = startX.current - endX;

    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        // swipe left
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
      } else {
        // swipe right
        setCurrentIndex((prev) =>
          prev === 0 ? testimonials.length - 1 : prev - 1
        );
      }
      startX.current = null; // Reset so it doesn't keep firing
    }
  };

  return (
    <div className="testimonial-slider">
      <h2 className="testimonial-title">Real Reviews. Real Results</h2>
      <div
        className="testimonial-card"
        ref={sliderRef}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
      >
        <img src={QuoteLeft} className="quoteLeft"/>
        <img src={QuoteLeft} className="quoteRight"/>
        <p className="testimonial-text">{testimonials[currentIndex].text}</p>
        <h3 className="testimonial-name">{testimonials[currentIndex].name}</h3>
        <p className="testimonial-location">
          {testimonials[currentIndex].location}
        </p>
        <div className="dots">
          {testimonials.map((_, index) => (
            <span
              key={index}
              className={`dot ${index === currentIndex ? "active" : ""}`}
              onClick={() => setCurrentIndex(index)}
            ></span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialSlider;
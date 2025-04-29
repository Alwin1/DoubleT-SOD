import React, { useState, useEffect, useRef } from "react";
import "./Testimonial.css";
import QuoteLeft from '../assets/quotation-left.png';
import QuoteRight from '../assets/quotation-right.png';


const testimonials = [
  {
    text: "We are very happy with our sod from Double T! Colby and his crew were great! I guarantee you will not find a harder working crew! They stayed until 2 am to finish up because they had another job in New Mexico to start the next morning. We live in Lockney, and they were here early both days and stayed past dark. It is hard to find people with a strong work ethic these days! They were very careful to get it just right. Colby was very responsive to any texts or calls I made to him. He is really working hard to make this business successful! We highly recommend Double T Sod! ❤️🖤",
    name: "Aaron-Karen Wilson",
    location: "Lockney, Texas",
  },
  {
    text: "I hired Double T in April after obtaining several estimates from local companies. Double T was by far the lowest-priced estimate. Since my yard is small (1500 sq ft,) I was surprised that some companies wanted to charge me more than twice Double T’s estimate. The crew arrived and within a few hours the yard was done. I was astonished at how efficient they were. I opted for fescue and my yard looks amazing. I have no regrets and would hire them again. I recommend them to anyone looking to have sod installed. Don’t even waste your time getting estimates from other companies.",
    name: "Corina Taylor",
    location: "",
  },
  {
    text: "Colby and his team did our backyard in Abernathy three weeks ago! Him and his team worked there tails off! And look! Speaks for itself! Highly recommend them!",
    name: "Greg Anderson",
    location: "Lubbock, Texas",
  },
  {
    text: "Colby was super responsive and answered any questions I had. They delivered the sod on time and made sure I had everything I need. Would highly recommend them to anyone looking for some sod.",
    name: "Mason Harrington",
    location: "",
  },
  {
    text: "I shopped around and shopped around and ran across Double T Sod. I texted them, because their website encouraged you to text, which is my favorite way to communicate. To my surprise he answered right back. I needed 2000 square feet of fescue delivered to New Mexico. Double T beat the local price by a mile. So I went out on a limb and ordered it. Every little detail was relayed to me by text. Delivery was smooth and easy. It was by far one of the best experiences I’ve had in a very long time. A company that does what they say they’re going to do is a breath of fresh air. We did the tilling, leveling and installation ourselves but followed Double T’s advice on everything! Get off the fence and order from this company!",
    name: "Kathy Beauregard",
    location: "New Mexico",
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
      <h2 className="testimonial-title">Real Reviews. Real Results.</h2>
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
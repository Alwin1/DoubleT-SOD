import React, { useState, useEffect, useRef } from "react";
import "./Offering.css";
import Checkmark from "../assets/checkmark.png";
import { debounce } from "lodash"; // You'll need to install lodash: npm install lodash

const Offering = () => {
  const offerings = [
    {
      title: "Premium Sod",
      description:
        "All sod varieties are sourced from local growers to ensure quality sod to match your needs.",
    },
    {
      title: "Competitive Pricing",
      description:
        "Thanks to strong partnerships with local sod farms, we offer top-tier quality at affordable prices.",
    },
    {
      title: "Convenient Delivery",
      description:
        "We deliver directly to homes and businesses in Lubbock, Amarillo, Midland, Odessa, and surrounding areas.",
    },
    {
      title: "Expert Installation",
      description:
        "Our team ensures proper installation for optimal growth and longevity.",
    },
  ];

  const [isVisible, setIsVisible] = useState(false);
  const slideInRef = useRef(null);

  const handleIntersection = (entries) => {
    const entry = entries[0];
    setIsVisible(entry.isIntersecting);
  };

  const [visibleItems, setVisibleItems] = useState([]);

  const itemRefs = useRef([]);

  useEffect(() => {
    const observers = [];

    itemRefs.current.forEach((ref, index) => {
      if (!ref) return;

      const observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            setVisibleItems((prev) => [...new Set([...prev, index])]);
          }
        },
        { threshold: 0.2 }
      );

      observer.observe(ref);
      observers.push(observer);
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

  const debouncedHandleIntersection = debounce(handleIntersection, 100);

  useEffect(() => {
    const targetElement = slideInRef.current;

    if (!targetElement) {
      console.log("slideInRef is not attached to an element!");
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        console.log("Intersection Observer triggered:", entry.isIntersecting);
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0 }
    );

    observer.observe(targetElement);
    console.log("Intersection Observer attached to:", targetElement);

    return () => {
      observer.unobserve(targetElement);
    };
  }, []); // Empty dependency array - should run only on mount and unmount

  return (
    <div className="offer-container">
      <h2 className="offer-heading">What We Offer</h2>
      <div className="offer-flex">
        {offerings.map((item, index) => (
          <div
            key={`${index}-${visibleItems.includes(index)}`} // forces remount
            ref={(el) => (itemRefs.current[index] = el)}
            className={`offer-item fade-in-varieties ${
              visibleItems.includes(index) ? "in-view" : ""
            }`}
            style={{ animationDelay: `${index * 0.3}s` }}
          >
            <div className="offer-title">
              <img src={Checkmark} className="checkmark" alt="checkmark" />
              <span>{item.title}</span>
            </div>
            <p className="offer-description">{item.description}</p>
          </div>
        ))}
      </div>
      <div className="slide-choose-container">
        <div className="slide-in-wrapper">
          <div
            ref={slideInRef}
            className={`slide-in ${isVisible ? "is-visible" : ""}`}
          >
            <h2 className="why-choose-heading">Why Choose Us?</h2>
            <div className="why-choose-item-inline">
              <h3>Family Values</h3>
              <p>
                We treat our customers like family, with honesty, integrity, and
                top-notch service
              </p>
            </div>
            <div className="why-choose-item-inline">
              <h3>Local Expertise</h3>
              <p>
                Deep knowledge of the West Texas & Eastern New Mexico climate
                means we know what works best
              </p>
            </div>
            <div className="why-choose-item-inline">
              <h3>Reliable Service</h3>
              <p>
                From consultation to delivery and installation, we make the
                process smooth and stress-free
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offering;

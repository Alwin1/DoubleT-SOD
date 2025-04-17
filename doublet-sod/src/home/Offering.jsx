import React from 'react';
import './Offering.css';
import Checkmark from '../assets/checkmark.png';

const Offering = () => {
    const offerings = [
        {
          title: 'Premium Sod',
          description: 'Hand-selected from trusted local farms for a strong, healthy lawn.',
        },
        {
          title: 'Competitive Pricing',
          description: 'Thanks to strong partnerships with local sod farms, we offer top-tier quality at affordable prices.',
        },
        {
          title: 'Convenient Delivery',
          description: 'We deliver directly to homes and businesses in Lubbock, Amarillo, Midland, Odessa, and surrounding areas.',
        },
        {
          title: 'Expert Installation',
          description: 'Our team ensures proper installation for optimal growth and longevity.',
        },
      ];
    
      return (
        <div className="offer-container">
          <h2 className="offer-heading">What We Offer</h2>
          <div className="offer-flex">
            {offerings.map((item, index) => (
              <div key={index} className="offer-item">
                <div className="offer-title">
                  <img src={Checkmark} className="checkmark" />
                  <span>{item.title}</span>
                </div>
                <p className="offer-description">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      );
    };

export default Offering;

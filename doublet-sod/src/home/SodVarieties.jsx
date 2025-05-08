import React from 'react';
import './SodVarieties.css';
import Tifway from '../assets/tifway.jpeg';
import Celebration from '../assets/celebration.jpeg';
import Fescue from '../assets/fescue.jpeg';
import { useInView } from 'react-intersection-observer';

const sodData = [
  {
    img: Tifway,
    alt: 'Tifway 19 Bermuda',
    label: 'Tifway 19 Bermuda',
    desc: 'Dense, fine-textured hybrid Bermuda with aggressive growth. Tifway 419 is soft yet durable, ideal for sports and golf, with quick recovery, good cold tolerance, and a rich green color.',
  },
  {
    img: Celebration,
    alt: 'Celebration Bermuda',
    label: 'Celebration Bermuda',
    desc: 'Soft texture, vibrant blue-green color, and excellent drought, heat, salt, and cold tolerance. Low-maintenance and perfect for homes, businesses, and sports fields.',
  },
  {
    img: Fescue,
    alt: 'Frontier Tall Fescue',
    label: 'Frontier Tall Fescue',
    desc: 'Heat and drought-resistant grass with dark green, fine blades and upright growth. It’s ideal for various soils and offers a dense, high-quality lawn.',
  },
];

const SodVarieties = () => {
  return (
    <div className='VarietiesContainer'>
      <h2 className='VarietiesTitle'>Our Sod Varieties</h2>
      <div className='VarietiesImageContainer'>
        {sodData.map((item, index) => {
          const [ref, inView] = useInView({ triggerOnce: false, threshold: 0.2 });

          return (
            <div
              ref={ref}
              className={`varietyCard fade-in ${inView ? 'in-view' : ''}`}
              style={{ animationDelay: `${index * 0.3}s` }}
              key={index}
            >
              <img src={item.img} alt={item.alt} className='varietyImage' loading='lazy' />
              <div className='varietyLabel'>{item.label}</div>
              <div className='varietyDescription'>
                <p>{item.desc}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SodVarieties;

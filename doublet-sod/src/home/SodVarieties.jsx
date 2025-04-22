import React from 'react';
import './SodVarieties.css';
import Tifway from '../assets/tifway.jpeg';
import Celebration from '../assets/celebration.jpeg';
import Fescue from '../assets/fescue.jpeg';

const SodVarieties = () => {
  return (
    <div className='VarietiesContainer'>
      <h2 className='VarietiesTitle'>Our Sod Varieties</h2>
      <div className='VarietiesImageContainer'>
        <div className='varietyCard'>
          <img src={Tifway} alt='Tifway 19 Bermuda' className='varietyImage' />
          <div className='varietyLabel'>Tifway 19 Bermuda</div>
          <div className='varietyDescription'>
          Dense, fine-textured hybrid Bermuda with aggressive growth. Tifway 419 is soft yet durable, ideal for sports and golf, with quick recovery, good cold tolerance, and a rich green color.
          </div>
        </div>

        <div className='varietyCard'>
          <img src={Celebration} alt='Celebration Bermuda' className='varietyImage' />
          <div className='varietyLabel'>Celebration Bermuda</div>
          <div className='varietyDescription'>
          Soft texture, vibrant blue-green color, and excellent drought, heat, salt, and cold tolerance. Low-maintenance and perfect for homes, businesses, and sports fields.
          </div>
        </div>

        <div className='varietyCard'>
          <img src={Fescue} alt='Frontier Tall Fescue' className='varietyImage' />
          <div className='varietyLabel'>Frontier Tall Fescue</div>
          <div className='varietyDescription'>
          Heat and drought-resistant grass with dark green, fine blades and upright growth. It’s ideal for various soils and offers a dense, high-quality lawn.
          </div>
        </div>
      </div>
    </div>
  );
};

export default SodVarieties;

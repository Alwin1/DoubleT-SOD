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
            A dense, fine-textured Bermuda ideal for sunny lawns and sports fields.
          </div>
        </div>

        <div className='varietyCard'>
          <img src={Celebration} alt='Celebration Bermuda' className='varietyImage' />
          <div className='varietyLabel'>Celebration Bermuda</div>
          <div className='varietyDescription'>
            A dark green Bermuda grass known for wear tolerance and recovery.
          </div>
        </div>

        <div className='varietyCard'>
          <img src={Fescue} alt='Frontier Tall Fescue' className='varietyImage' />
          <div className='varietyLabel'>Frontier Tall Fescue</div>
          <div className='varietyDescription'>
            A cool-season grass ideal for shade with excellent drought resistance.
          </div>
        </div>
      </div>
    </div>
  );
};

export default SodVarieties;

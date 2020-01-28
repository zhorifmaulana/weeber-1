import React from 'react';

import Checkbox from '../checkbox/checkbox.component';

import './pricing-additional.styles.scss';

const PricingAdditional = ({title, price}) => (
  <div className='card-additional'>
    <Checkbox />
    <div className='card-additional__description'>
      <h4 className='card-additional__title'>
        {title}
      </h4>
      <p className='card-additional__price'>
        Additional {price} IDR
      </p>
    </div>
  </div>
);

export default PricingAdditional;

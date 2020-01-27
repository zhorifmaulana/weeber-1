import React from 'react';

import './pricing-plan.styles.scss';

const PricingPlan = ({name, price, features}) => (
    <div className="col-xs-12 col-lg-3">
      <div className="card">
        <div className="card__header">
          <div className='checkbox-container'>
            <label className="checkbox">
              <input type='checkbox' />
              <span className='checkbox__custom'></span>
            </label>
          </div>
          <div className='card-plan'>
            <h4 className='card-plan__title'>{name}</h4>
            <p className='card-plan__price'>Only {price} IDR</p>
          </div>
        </div>
        <div className="card-feature">
          <ul>
            {features.map(feature => <li key={Math.random()}>{feature}</li>)}
          </ul>
        </div>
        <a href="/login" className='btn btn--card'>Contact Us For Details!</a>
      </div>
    </div>
);

export default PricingPlan;

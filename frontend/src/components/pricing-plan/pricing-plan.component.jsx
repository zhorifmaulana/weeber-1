import React from 'react';

import Button from '../button/button.component';

import './pricing-plan.styles.scss';

const PricingPlan = ({name, price}) => (
    <div className="col-xs-12 col-lg-4">
      <div className="card">
        <div className="card-header">
          <h3><span className="currency">Rp.</span>{price}<span className="period">/month</span></h3>
        </div>
        <div className="card-block">
          <h4 className="card-title">
            {name}
          </h4>
          <Button color='btn-dark-blue'>Details</Button>
        </div>
      </div>
    </div>
);

export default PricingPlan;

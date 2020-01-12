import React from 'react';

import PricingPlan from '../pricing-plan/pricing-plan.component';

import './pricing.styles.scss';

const Pricing = ({product}) => (
  <div ref={product} className='pricing'>
    <div className='container'>
      <div className='section-header'>
        <h3>Our Solutions</h3>
        <p>We are providing several packages in order to represent your organization until maximizing your organization's workflow!</p>
      </div>
      <div className='row flex-items-xs-middle flex-items-xs-center'>
        <PricingPlan name='Electron' price={99+'k'}/>
        <PricingPlan name='Phonon' price={199+'k'}/>
        <PricingPlan name='Exciton' price={249+'k'}/>
        <PricingPlan name='Magnon' price={299+'k'}/>
        <PricingPlan name='Polaron' price='xxx'/>
      </div>
    </div>
  </div>
);

export default Pricing;

import React from 'react';

import PricingPlan from '../pricing-plan/pricing-plan.component';

import './pricing.styles.scss';

const Plans = [
  {
    id: 1,
    name : 'Electron',
    price : '99.000',
    features : [
      'Visi & Misi',
      'Struktur Organisasi',
      'Program Kerja',
      'Kontak'
    ]
  }, {
    id: 2,
    name : 'Phonon',
    price : '199.000',
    features : [
      'Visi & Misi',
      'Struktur Organisasi',
      'Program Kerja',
      'Kontak',
      'News Event',
      'Info Beasiswa',
      'User Interface Admin'
    ]
  }, {
    id: 3,
    name : 'Exciton',
    price : '249.000',
    features : [
      'Visi & Misi',
      'Struktur Organisasi',
      'Program Kerja',
      'Kontak',
      'News Event',
      'Info Beasiswa',
      'Calendar',
      'User Interface Admin',
    ]
  }, {
    id: 4,
    name : 'Magnon',
    price : '299.000',
    features : [
      'Visi & Misi',
      'Struktur Organisasi',
      'Program Kerja',
      'Kontak',
      'News Event',
      'Info Beasiswa',
      'Calendar',
      'User Interface Admin',
      'Portal Pendaftaran'
    ]
  }
]

const Pricing = ({product}) => (
  <div ref={product} className='pricing'>
    <div className='container'>
      <div className='section-header'>
        <h3>Our Solutions</h3>
        <p>We are providing several packages in order to represent your organization until maximizing your organization's workflow!</p>
      </div>
      <div className='row flex-items-xs-middle flex-items-xs-center'>
        {Plans.map(({id, ...otherProps}) => <PricingPlan key={id} {...otherProps} />)}
      </div>
    </div>
  </div>
);

export default Pricing;

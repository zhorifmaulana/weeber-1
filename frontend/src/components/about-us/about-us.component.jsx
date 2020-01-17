import React from 'react';

import './about-us.styles.scss';

import DINO from '../../assets/img/DINO.png';

const AboutUs = () => (
  <div className='about-us'>
    <h2 className='heading-secondary'>About Us</h2>
    <div className='d-flex justify-content-center align-items-center'>
      <h4 className='about-us__description'>We Are Here, Because of our concern for campus level organizations who has a big vision, but is not followed by a coolness the face of the organization through their website</h4>
    </div>
    <div className='mocking-section'>
      <div className='row'>
        <div className='col-md-3 col-sm-12 mocking-section--right'>
          <p className='mocking-section__text mocking-section__text--right'>" aduh sayang banget sih ternyata BEM Fakultas gue ngga punya web "</p>
        </div>
        <div className='col-md-6 col-sm-12 mocking-section--center'>
          <img src={DINO} alt='DINO' className='mocking-section__img' />
        </div>
        <div className='col-md-3 col-sm-12 mocking-section--left'>
          <p className='mocking-section__text'>" Ih malu-maluin banget sih website buat organisasi gue jelek banget "</p>
        </div>
      </div>
    </div>
  </div>
);

export default AboutUs;

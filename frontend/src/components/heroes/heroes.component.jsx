import React from 'react';

import { Link } from 'react-router-dom';

import People from '../../assets/img/people-01.png';
import Button from '../button/button.component';

import './heroes.styles.scss';

const Heroes = ({home}) => (
  <div ref={home} className="jumbotron jumbotron-fluid">
  <div className="container">
      <div className="row justify-content-center align-self-center">
        <div className="col-md-6 intro-info order-md-first order-last">
          <div className='intro-text'>
            <h2>We provide web services<br/>for your needs</h2>
          </div>
          <div className='button mt-4'>
            <Link to='/login'>
              <Button className='btn--dark-blue'>Get Started</Button>
            </Link>
          </div>
        </div>

        <div className="col-md-6 intro-img order-md-last order-first">
          <img src={People} alt="" className="img-fluid" />
        </div>
      </div>
  </div>
</div>
);

export default Heroes

import React from 'react';

import './styles/login.styles.scss';

import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Logo from '../assets/img/logowhite.png';

import ContactForm from '../components/contact-form/contact-form.component';

const LoginPage = () => (
  <div className='login-page'>
    <div className='container'>
      <div className='img-container'>
        <Link to='/'>
          <img className='header' src={Logo} alt='Weeber Logo' />
        </Link>
        <div className='socmed-icons'>
          <span className='socmed-icon'><FontAwesomeIcon icon={['fab', 'twitter']} /></span>
          <span className='socmed-icon'><FontAwesomeIcon icon={['fab', 'facebook-f']} /></span>
          <span className='socmed-icon'><FontAwesomeIcon icon={['fab', 'instagram']} /></span>
          <span className='socmed-icon'><FontAwesomeIcon icon={['fab', 'linkedin-in']} /></span>
        </div>
      </div>
      <ContactForm />
    </div>
    <div className='copyright-section'>
      <span className='copyright'>Designed by <span>Weeber Web Development Team</span></span>
    </div>
  </div>
);

export default LoginPage;

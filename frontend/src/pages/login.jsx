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
          {/* <a href="/" target="_blank" rel="noopener noreferrer">
            <span className='socmed-icon'><FontAwesomeIcon icon={['fab', 'twitter']} /></span>
          </a> */}
          <a href="https://www.facebook.com/Weeber-Web-Services-106725284216759/" target="_blank" rel="noopener noreferrer">
            <span className='socmed-icon'><FontAwesomeIcon icon={['fab', 'facebook-f']} /></span>
          </a>
          <a href="https://www.instagram.com/weeber_id/" target="_blank" rel="noopener noreferrer">
            <span className='socmed-icon'><FontAwesomeIcon icon={['fab', 'instagram']} /></span>
          </a>
          <a href="https://www.linkedin.com/company/weebersolutions/" target="_blank" rel="noopener noreferrer">
            <span className='socmed-icon'><FontAwesomeIcon icon={['fab', 'linkedin-in']} /></span>
          </a>
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

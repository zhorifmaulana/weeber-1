import React, { Fragment } from 'react';

import ContactInfo from '../contact-info/contact-info.component';
import ContactForm from '../contact-form/contact-form.component';

import './footer.styles.scss';

const Footer = ({ contactUs }) => (
  <Fragment>
    <div ref={contactUs} className='footer'>
      <div className='container'>
        <div className='footer-items'>
          <ContactInfo />
          <ContactForm plan={[]} />
        </div>
      </div>
    </div>
    <div className='copyright-section'>
      <p className='copyright'>Designed by <span>Weeber Web Development Team</span></p>
    </div>
  </Fragment>
);

export default Footer;

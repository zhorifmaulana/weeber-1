import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './contact-info.styles.scss';

const ContactInfo = () => (
  <div className="contact-info">
    <h4>Contact Us</h4>
    <p>
      Gedung F Departemen Fisika <br/>
      Kampus UI <br/>
      Depok<br/>
      Indonesia <br/>
      <strong>Phone:</strong> +62 821 2048 9633<br/>
      <strong>Email:</strong> weeber_project@gmail.com<br/>
    </p>
    <div className='socmed-icons'>
      <span className='socmed-icon'><FontAwesomeIcon icon={['fab', 'twitter']} /></span>
      <span className='socmed-icon'><FontAwesomeIcon icon={['fab', 'facebook-f']} /></span>
      <span className='socmed-icon'><FontAwesomeIcon icon={['fab', 'instagram']} /></span>
      <span className='socmed-icon'><FontAwesomeIcon icon={['fab', 'linkedin-in']} /></span>
    </div>
  </div>
);

export default ContactInfo;

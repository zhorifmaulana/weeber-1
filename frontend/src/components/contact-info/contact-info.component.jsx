import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './contact-info.styles.scss';

const ContactInfo = () => (
  <div className="contact-info">
    <h4>Contact Us</h4>
    <p>
      Depok<br/>
      West Java <br/>
      Indonesia <br/>
      <strong>Phone:</strong> +62 821 2048 9633<br/>
      <strong>Email:</strong> weeber_project@gmail.com<br/>
    </p>
    <div className='socmed-icons'>
      {/* <a target="_blank" href="/" rel="noopener noreferrer">
        <span className='socmed-icon'><FontAwesomeIcon icon={['fab', 'twitter']} /></span>
      </a> */}
      <a target="_blank" href="https://www.facebook.com/Weeber-Web-Services-106725284216759/" rel="noopener noreferrer">
        <span className='socmed-icon'><FontAwesomeIcon icon={['fab', 'facebook-f']} /></span>
      </a>
      <a target="_blank" href="https://www.instagram.com/weeber_id/" rel="noopener noreferrer">
        <span className='socmed-icon'><FontAwesomeIcon icon={['fab', 'instagram']} /></span>
      </a>
      {/* <a target="_blank" href="/" rel="noopener noreferrer">
        <span className='socmed-icon'><FontAwesomeIcon icon={['fab', 'linkedin-in']} /></span>
      </a> */}
    </div>
  </div>
);

export default ContactInfo;

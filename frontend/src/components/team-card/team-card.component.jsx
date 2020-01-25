import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './team-card.styles.scss';

const TeamCard = ({name, role, imgUrl, instagramUrl, linkedInUrl, fbUrl}) => (
  <div className="col-lg-3 col-md-6 team-card">
    <div className="member">
      <img src={imgUrl} className="img-fluid" alt="" />
      <div className="member-info">
        <div className="member-info-content">
          <h4>{name}</h4>
          <span>{role}</span>
          <div className="social">
            <a target="_blank" href={fbUrl} rel="noopener noreferrer">
              <FontAwesomeIcon icon={['fab', 'facebook']} />
            </a>
            <a target="_blank" href={instagramUrl} rel="noopener noreferrer">
              <FontAwesomeIcon icon={['fab', 'instagram']} />
            </a>
            <a target="_blank" href={linkedInUrl} rel="noopener noreferrer">
              <FontAwesomeIcon icon={['fab', 'linkedin']} />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default TeamCard;

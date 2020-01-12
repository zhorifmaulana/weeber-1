import React from 'react';

import TeamCard from '../team-card/team-card.component';

import Aristia from '../../assets/img/team/team-1.jpg';
import Bayu from '../../assets/img/team/team-2.jpg';
import Zhorif from '../../assets/img/team/team-3.jpg';
import Ali from '../../assets/img/team/team-4.jpg';

import './team.styles.scss';

const teams = [
  {
    name: 'Aristia Reyhan',
    role: 'UI Designer',
    imgUrl: Aristia,
    id: 1,
    fbUrl: '',
    instagramUrl: '',
    linkedInUrl: ''
  },
  {
    name: 'Bayu Aditya',
    role: 'Backend Developer',
    imgUrl: Bayu,
    id: 2,
    fbUrl: '',
    instagramUrl: '',
    linkedInUrl: ''
  },
  {
    name: 'Zhorif Maulana',
    role: 'Frontend Developer',
    imgUrl: Zhorif,
    id: 3,
    fbUrl: 'https://www.facebook.com/zmaulana.akram',
    instagramUrl: 'https://www.instagram.com/zhorifm',
    linkedInUrl: 'https://www.linkedin.com/in/zhorif-maulana-akram/'
  },
  {
    name: 'Azhar Ali Fauzi',
    role: 'Frontend Developer',
    imgUrl: Ali,
    id: 4,
    fbUrl: 'https://www.facebook.com/azharalifauzi',
    instagramUrl: 'https://www.instagram.com/azharalifauzi',
    linkedInUrl: 'https://www.linkedin.com/in/azhar-ali-fauzi-4564a117a'
  },
]

const Team = ({ team }) => (
  <div ref={team} className='team'>
    <div className='container'>
      <div className='section-header'>
        <h3>Meet Our Team</h3>
        <p>Our team consists of several people who are experienced in organizations and web development.</p>
      </div>
      <div className='row'>
        {teams.map(({id, ...teamProps}) => (
          <TeamCard {...teamProps} key={id}  />
        ))}
      </div>
    </div>
  </div>
);

export default Team;

import React, { Fragment, useRef } from 'react';

import Header from '../components/header/header.component';
import Heroes from '../components/heroes/heroes.component';
import Pricing from '../components/pricing/pricing.component';
import Team from '../components/team/team.component';
import Footer from '../components/footer/footer.component';

const HomePage = () => {
  const home = useRef();
  const product = useRef();
  const team = useRef();
  const contactUs = useRef();

  const onHomeFocus = () => window.scrollTo({top: home.current.offsetTop, behavior: 'smooth'});
  const onProductFocus = () => window.scrollTo({top: product.current.offsetTop-76.75, behavior: 'smooth'});
  const onTeamFocus = () => window.scrollTo({top: team.current.offsetTop-76.75, behavior: 'smooth'});
  const onContactUsFocus = () => window.scrollTo({top: contactUs.current.offsetTop-76.75, behavior: 'smooth'});

  return (
  <Fragment>
    <Header
      onHomeFocus={onHomeFocus}
      onProductFocus={onProductFocus}
      onTeamFocus={onTeamFocus}
      onContactUsFocus={onContactUsFocus}
      />
    <Heroes home={home} />
    <Pricing product={product} />
    <Team team={team} />
    <Footer contactUs={contactUs} />
  </Fragment>
)};

export default HomePage;

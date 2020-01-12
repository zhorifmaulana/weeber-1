import React, { Fragment, useRef, useState } from 'react';

import Header from '../components/header/header.component';
import Heroes from '../components/heroes/heroes.component';
import Pricing from '../components/pricing/pricing.component';
import Team from '../components/team/team.component';
import Footer from '../components/footer/footer.component';

const HomePage = () => {
  const [isHidden, setIsHidden] = useState(true);

  const home = useRef();
  const product = useRef();
  const team = useRef();
  const contactUs = useRef();

  const onFocus = (ref) => {
    window.scrollTo({top: ref.current.offsetTop-76.75, behavior: 'smooth'});
    setIsHidden(true);
  }

  const navbarToggler = () => {
      setIsHidden(!isHidden);
    }

  return (
  <Fragment>
    <Header
      onFocus={onFocus}
      home={home}
      product={product}
      team={team}
      contactUs={contactUs}
      isHidden={isHidden}
      navbarToggler={navbarToggler}
      />
    <Heroes home={home} />
    <Pricing product={product} />
    <Team team={team} />
    <Footer contactUs={contactUs} />
  </Fragment>
)};

export default HomePage;

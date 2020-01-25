import React, { Fragment, useRef, useState } from 'react';

import './styles/homepage.styles.scss';

import Header from '../components/header/header.component';
import Heroes from '../components/heroes/heroes.component';
import Pricing from '../components/pricing/pricing.component';
import Team from '../components/team/team.component';
import Footer from '../components/footer/footer.component';
import AboutUs from '../components/about-us/about-us.component';

const HomePage = () => {
  const [isHidden, setIsHidden] = useState(true);

  const home = useRef();
  const product = useRef();
  const aboutUs = useRef();
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
      aboutUs={aboutUs}
      contactUs={contactUs}
      isHidden={isHidden}
      navbarToggler={navbarToggler}
      />
      <Heroes home={home} />
      <AboutUs aboutUs={aboutUs} />
    <Pricing product={product} />
    <Team />
    <Footer contactUs={contactUs} />
  </Fragment>
)};

export default HomePage;

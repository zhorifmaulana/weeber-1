import React from 'react';

import Logo from '../../assets/img/logowhite.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './header.styles.scss';

class Header extends React.Component {
  state = {
    isScroll : false,
  }

  handleScroll = () => {
    const isScroll = window.scrollY > 50;
    if (isScroll) {
      this.setState({isScroll: true})
    } else {
      this.setState({isScroll: false})
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  render() {
    const { isScroll } = this.state;
    const { isHidden, navbarToggler, onFocus, home, product, team, contactUs } = this.props;
    return(
      <nav id='nav' className={`navbar navbar-expand-lg navbar-light ${isScroll ? "scrolled" : null} ${isHidden ? null : 'show'}`}>
        <div className='container'>
          <img onClick={() => onFocus(home)} className='navbar-brand' src={Logo} alt='Weeber Logo' />
          <button onClick={navbarToggler} className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <FontAwesomeIcon className={`${isScroll ? "scrolled-icon" : null} ${isHidden ? null : 'show'}`} icon='bars' />
          </button>
          <div className={`navbar-hidden ${isHidden ? null : 'show'}`} id="navbarNav">
            <ul className="navbar-nav ml-auto">
              <li className='nav-item active'>
                <span onClick={() => onFocus(home)} className={`nav-link active ${isScroll ? "scrolled-link" : null} ${isHidden ? null : 'show'}`} >Home <span className="sr-only">(current)</span></span>
              </li>
              <li className="nav-item">
                <span onClick={() => onFocus(product)} className={`nav-link active ${isScroll ? "scrolled-link" : null} ${isHidden ? null : 'show'}`} >Product</span>
              </li>
              <li className="nav-item">
                <span onClick={() => onFocus(team)} className={`nav-link active ${isScroll ? "scrolled-link" : null} ${isHidden ? null : 'show'}`} >Team</span>
              </li>
              <li className="nav-item">
                <span onClick={() => onFocus(contactUs)} className={`nav-link active ${isScroll ? "scrolled-link" : null} ${isHidden ? null : 'show'}`} >Contact Us</span>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}

export default Header;

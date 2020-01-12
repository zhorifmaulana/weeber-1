import React from 'react';

import Logo from '../../assets/img/logowhite.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './header.styles.scss';

class Header extends React.Component {
  state = {
    isScroll : false,
    isHidden : true
  }

  componentDidMount() {
    window.addEventListener('scroll', () => {
      const isScroll = window.scrollY > 50;
      if (isScroll) {
        this.setState({isScroll: true})
      } else {
        this.setState({isScroll: false})
      }
    });
  }

  navbarToggler = () => {
    this.setState({isHidden: !this.state.isHidden})
  }
  render() {
    const { isScroll, isHidden } = this.state;
    const { onHomeFocus, onProductFocus, onTeamFocus, onContactUsFocus } = this.props;
    return(
      <nav id='nav' className={`navbar navbar-expand-lg navbar-light ${isScroll ? "scrolled" : null} ${isHidden ? null : 'show'}`}>
        <div className='container'>
          <img onClick={onHomeFocus} className='navbar-brand' src={Logo} alt='Weeber Logo' />
          <button onClick={this.navbarToggler} className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <FontAwesomeIcon className={`${isScroll ? "scrolled-icon" : null} ${isHidden ? null : 'show'}`} icon='bars' />
          </button>
          <div className={`navbar-hidden ${isHidden ? null : 'show'}`} id="navbarNav">
            <ul className="navbar-nav ml-auto">
              <li className='nav-item active'>
                <span onClick={onHomeFocus} className={`nav-link active ${isScroll ? "scrolled-link" : null} ${isHidden ? null : 'show'}`} >Home <span className="sr-only">(current)</span></span>
              </li>
              <li className="nav-item">
                <span onClick={onProductFocus} className={`nav-link active ${isScroll ? "scrolled-link" : null} ${isHidden ? null : 'show'}`} >Product</span>
              </li>
              <li className="nav-item">
                <span onClick={onTeamFocus} className={`nav-link active ${isScroll ? "scrolled-link" : null} ${isHidden ? null : 'show'}`} >Team</span>
              </li>
              <li className="nav-item">
                <span onClick={onContactUsFocus} className={`nav-link active ${isScroll ? "scrolled-link" : null} ${isHidden ? null : 'show'}`} >Contact Us</span>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}

export default Header;

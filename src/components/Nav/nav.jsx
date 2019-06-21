import React from 'react';
import PropTypes from 'prop-types';

import YoutubeLogo from './images/youtube-logo.png';
import './nav.css';

const Nav = ({ children }) => (
  <div className="menu">
    <nav className="main-nav">
      <a href="/">
        <img src={YoutubeLogo} alt="Youtube Logo" className="youtube-logo" />
      </a>
      {children}
    </nav>
  </div>
);

Nav.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Nav;

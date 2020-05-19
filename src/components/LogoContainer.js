import React from 'react';
import logo from '../images/logo.svg';
import sprocket from '../images/sprocket.svg';
import './LogoContainer.scss';

function LogoContainer() {
  return (
    <div className="cms-react-boilerplate__logo-container">
      <img src={logo} alt="react logo" />
      <img className="sprocket-logo" src={sprocket} alt="sprocket logo" />
    </div>
  );
}

export default LogoContainer;

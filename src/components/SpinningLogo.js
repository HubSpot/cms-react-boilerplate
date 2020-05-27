import React from 'react';
import './SpinningLogo.scss';

function SpinningLogo({ src, alt, isSprocket = false }) {
  const classNames = `spinning-logo ${
    isSprocket ? 'spinning-logo--sprocket' : ''
  }`;
  return <img className={classNames} src={src} alt={alt} />;
}

export default SpinningLogo;

import React from 'react';
import partnersImage from '../../assets/Grupo-7610.png';
import './Footer.scss';

const Footer = () => {
  return(
    <footer className='footer'>
      <p className="footer-partners-font">Con el Patrocinio de</p>
      <img className='footer-partners-image' src={partnersImage}/>
    </footer>
  )
}

export default Footer;
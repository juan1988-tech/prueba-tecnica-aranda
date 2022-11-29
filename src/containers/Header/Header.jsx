import React from 'react';
import './header.scss';

const Header = () =>{
  return(
  <header className="header">
    <p className="header__title">Recipe<span>App</span></p>
    <a className="header__logo" href="./"></a>
  </header>
  )
}

export default Header;
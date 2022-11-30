import React from 'react';
import HeaderNabvar from '../../components/HeaderNavbar/HeaderNavbar';
import './header.scss';

const Header = () =>{
  return(
  <header className="header">
    <p className="header__title">Recipe<span>App</span></p>
    <HeaderNabvar/>
    <a className="header__logo" href="./"></a>
  </header>
  )
}

export default Header;
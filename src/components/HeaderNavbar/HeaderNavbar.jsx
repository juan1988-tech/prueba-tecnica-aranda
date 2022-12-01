import React from 'react';
import './HeaderNavbar.scss'; 

const HeaderNabvar = () =>{
  return(
    <nav className="header__navbar">
      <ul className="header__list-meal">
        <li>
         <a href="/" className="header__list-meal-link home-link">Home</a>
        </li>
        <li>
          <a href="/" className="header__list-meal-link">Vegetarianos</a>
        </li>
        <li>
          <a href="/" className="header__list-meal-link">Platos principales</a>
        </li>
        <li>
          <a href="/" className="header__list-meal-link">Tortas</a>
        </li>
        <li>
          <a href="/" className="header__list-meal-link">Comida Rapida</a>
        </li>
        <li>
          <a href="/" className="header__list-meal-link">Menú Niños</a>
        </li>
        <li>
          <a href="/" className="header__list-meal-link">Sopas</a>
        </li>
    </ul>
  </nav>
  )
}

export default HeaderNabvar;
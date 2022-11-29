import React from 'react';
import './Hero.scss';

const Hero = () =>{
  return(
    <section className='Hero'>
      <article className='Hero__title-container'>
        <h1 className='Hero__first--title'>Recetas</h1>
        <p className='Hero__second--title'>para todos</p>
      </article>
    </section>
  ) 
}

export default Hero;
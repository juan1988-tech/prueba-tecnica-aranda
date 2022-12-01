import React from "react";
import './NewRecipeCard.scss';
import plate from '../../assets/icons/ic_portion.svg';
import clock from '../../assets/icons/ic_time.svg';
import chefIcon from '../../assets/icons/ic_chef.svg';

const InformationRecipe = () =>{
  return (
    <section className='information-recipe'>
      <article className='portion-size'>
        <img className="plate-image" src={plate}/>
        <p>Tamaño de la porción</p>
        <p>4 raciones</p>  
      </article>
      <article className='time-preparation'>
        <img className='clock-image' src={clock}/>
        <p>Tiempo de preparación</p>
        <p>10 minutos</p>
      </article>
      <article className='recipe-difficult'>
        <img className='chef-icon' src={chefIcon}/>
        <p>Dificultad</p>
        <p>Facil</p>
      </article>
    </section>
  )
}

export default InformationRecipe;
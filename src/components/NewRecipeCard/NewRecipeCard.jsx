import React from 'react';
import './NewRecipeCard.scss';
import recipeImage from '../../assets/Ojingeo-muchim.png';
import star from '../../assets/icons/ic_star.svg';
import hearth from '../../assets/icons/ic-favorite.svg';
import plate from '../../assets/icons/ic_portion.svg';
import clock from '../../assets/icons/ic_time.svg';
import chefIcon from '../../assets/icons/ic_chef.svg';
import useGetRecipe from '../../Hooks/useGetRecipe';

const FirstRecipe = () =>{
  return(
    <section>
       <p className='new-recipe-name'>Ojingeo <span>Muchim</span></p>
       <div className='new-recipe-qualification'>
          <div className='new-recipe-first-group-ranking'>
            <img className='new-recipe-star' src={star}/>
            <p>5.0</p>
          </div>
          <img className="new-recipe-hearth" src={hearth}/>
       </div>
       </section> 
  )
}

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

const NewRecipeCard = () => {
  const recipe = useGetRecipe();
  const { sizeCard } =  recipe;
  const { changePerformanceCard } =  recipe;
  const { changeDefaultCard } = recipe;

  return(
    <article className={sizeCard}  onMouseOver={changePerformanceCard} onMouseLeave={changeDefaultCard}>
      <img src={recipeImage} className="recipe-image"/>
      {(sizeCard==="new-recipe-card")?<FirstRecipe/>:<InformationRecipe/>} 
    </article>
  )
}

export default NewRecipeCard;
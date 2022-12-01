import React from 'react';
import './NewRecipeCard.scss';
import star from '../../assets/icons/ic_star.svg';
import hearth from '../../assets/icons/ic-favorite.svg';

const FirstRecipe = ({firstNameRecipe,secondNameRecipe,cualification}) =>{
  return(
    <section className='first-recipe'>
       <p className='new-recipe-name'>{firstNameRecipe}  <span>{secondNameRecipe}</span></p>
       <div className='new-recipe-qualification'>
          <div className='new-recipe-first-group-ranking'>
            <img className='new-recipe-star' src={star}/>
            <p>{cualification}</p>
          </div>
          <img className="new-recipe-hearth" src={hearth}/>
       </div>
       </section> 
  )
}

export default FirstRecipe;
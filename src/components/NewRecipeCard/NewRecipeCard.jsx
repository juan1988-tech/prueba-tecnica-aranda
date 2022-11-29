import React from 'react';
import './NewRecipeCard.scss';
import recipeImage from '../../assets/Ojingeo-muchim.png';
import star from '../../assets/icons/ic_star.svg';
import hearth from '../../assets/icons/ic-favorite.svg';

const NewRecipeCard = () => {
  return(
    <article className="new-recipe-card">
       <img src={recipeImage} className="recipe-image"/>
       <p className='new-recipe-name'>Ojingeo <span>Muchim</span></p>
       <div className='new-recipe-qualification'>
          <div className='new-recipe-first-group-ranking'>
            <img className='new-recipe-star' src={star}/>
            <p>5.0</p>
          </div>
          <img className="new-recipe-hearth" src={hearth}/>
       </div> 
    </article>
  )
}

export default NewRecipeCard;
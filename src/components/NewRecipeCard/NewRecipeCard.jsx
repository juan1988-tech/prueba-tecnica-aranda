import React,{ useContext } from 'react';
import AppContext from '../../context/AppContext';
import './NewRecipeCard.scss';
import useGetRecipe from '../../Hooks/useGetRecipe';
import FirstRecipe from './FirstRecipe';
import InformationRecipe from './InformationRecipe';

const NewRecipeCard = ({firstNameRecipe,secondNameRecipe,cualification,recipeImage,numberPortions,timeCook}) => {
  const recipes = useGetRecipe()
  const { sizeCard } = recipes;
  const { changePerformanceCard } = recipes;
  const { changeDefaultCard } = recipes;
  const data = useContext(AppContext);

  return(
    <article className={sizeCard}  onMouseOver={changePerformanceCard} onMouseLeave={changeDefaultCard}>
      <div className={recipeImage} alt={recipeImage}></div>
      {(sizeCard==="new-recipe-card")?
      <FirstRecipe 
        firstNameRecipe={firstNameRecipe}
        secondNameRecipe={secondNameRecipe}
        cualification={cualification}
      />:
      <InformationRecipe
        numberPortions={numberPortions}
        timeCook={timeCook}
      />} 
    </article>
  )
}

export { NewRecipeCard };
import React,{ useContext } from 'react';
import AppContext from '../../context/AppContext';
import './NewRecipes.scss';
import { NewRecipeCard } from '../../components/NewRecipeCard/NewRecipeCard'

const NewRecipes = () =>{
  const data  = useContext(AppContext);
  return(
    <section className='new-recipes'>
    <p className='new-recipes-title'>Nuevas Recetas</p>  
    <article className='new-recipe-delay'>
      <div className='new-recipe-delay-container'>
        {data.map(newRecipe=>(<NewRecipeCard
                              firstNameRecipe={newRecipe.firstNameRecipe}
                              secondNameRecipe={newRecipe.secondNameRecipe}
                              cualification={newRecipe.cualification}
                              recipeImage={newRecipe.recipeImage}
                              numberPortions={newRecipe.numberPortions}
                              timeCook={newRecipe.timeCook}
                              key={newRecipe.firstNameRecipe}
                                            />))}
      </div>
    </article>
    </section>
  )
}

export default NewRecipes;
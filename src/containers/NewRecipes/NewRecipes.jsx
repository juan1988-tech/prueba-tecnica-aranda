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
        <NewRecipeCard 
          firstNameRecipe={data[0].firstNameRecipe}
          secondNameRecipe={data[0].secondNameRecipe}
          cualification={data[0].cualification}
          recipeImage={data[0].recipeImage}
        />
        <NewRecipeCard 
          firstNameRecipe={data[1].firstNameRecipe}
          secondNameRecipe={data[1].secondNameRecipe}
          cualification={data[1].cualification}
          recipeImage={data[1].recipeImage}
        />
        <NewRecipeCard 
          firstNameRecipe={data[2].firstNameRecipe}
          secondNameRecipe={data[2].secondNameRecipe}
          cualification={data[2].cualification}
          recipeImage={data[2].recipeImage}
        />
        <NewRecipeCard 
          firstNameRecipe={data[3].firstNameRecipe}
          secondNameRecipe={data[3].secondNameRecipe}
          cualification={data[3].cualification}
          recipeImage={data[3].recipeImage}
        />
      </div>
    </article>
    </section>
  )
}

export default NewRecipes;
import React from 'react';
import './NewRecipes.scss';
import NewRecipeCard from '../../components/NewRecipeCard/NewRecipeCard'

const NewRecipes = () =>{
  return(
    <section className='new-recipes'>
    <p className='new-recipes-title'>Nuevas Recetas</p>  
    <article className='new-recipe-delay'>
      <div className='new-recipe-delay-container'>
        <NewRecipeCard/>
        <NewRecipeCard/>
        <NewRecipeCard/>
        <NewRecipeCard/>
      </div>
    </article>
    </section>
  )
}

export default NewRecipes;
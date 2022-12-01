import './App.scss';
import React from 'react';
import Header from './containers/Header/Header.jsx';
import Hero from './containers/Hero/Hero.jsx';
import MealCategory from './containers/MealCategories/MealCategories.jsx';
import NewRecipes from './containers/NewRecipes/NewRecipes';
import Footer from './containers/Footer/Footer';
import AppContext from './context/AppContext';


function App() {
  const data = [
    {firstNameRecipe: 'Ojingeo', secondNameRecipe: 'Muchin', cualification:'5.0', recipeImage: 'recipe-image ojinjeo-muchin', numberPortions: 4,timeCook: 10},
    {firstNameRecipe: 'Cola', secondNameRecipe: 'Chicken', cualification:'5.0', recipeImage: 'recipe-image cola-chicken',numberPortions: 3, timeCook: 16 },
    {firstNameRecipe: 'Roasted', secondNameRecipe: 'Carrot', cualification:'4.5', recipeImage: 'recipe-image roasted-carrot', numberPortions: 4, timeCook: 22},
    {firstNameRecipe: 'Sweet', secondNameRecipe: 'Cherries', cualification:'4.0',recipeImage: 'recipe-image sweet-cherries', numberPortions: 2, timeCook: 25},
  ]

  return (
    <AppContext.Provider value={data}>
    <div className="App">
      <Header/>
      <Hero/>
      <section className='recipe-container'>
        <MealCategory/>
        <NewRecipes/>
      </section>
      <Footer/>
    </div>
    </AppContext.Provider>
  );
}

export default App;


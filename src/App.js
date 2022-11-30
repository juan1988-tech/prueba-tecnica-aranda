import './App.scss';
import React, { useEffect } from 'react';
import axios from 'axios';
import Header from './containers/Header/Header.jsx';
import Hero from './containers/Hero/Hero.jsx';
import MealCategory from './containers/MealCategories/MealCategories.jsx';
import NewRecipes from './containers/NewRecipes/NewRecipes';
import Footer from './containers/Footer/Footer';


function App() {
  return (
    <div className="App">
      <Header/>
      <Hero/>
      <section className='recipe-container'>
        <MealCategory/>
        <NewRecipes/>
      </section>
      <Footer/>
    </div>
  );
}

export default App;


import './App.scss';
import React, { useEffect } from 'react';
import axios from 'axios';
import Header from './containers/Header/Header.jsx';
import Hero from './containers/Hero/Hero.jsx';
import MealCategory from './containers/MealCategories/MealCategories.jsx';
import NewRecipes from './containers/NewRecipes/NewRecipes';
import Footer from './containers/Footer/Footer';


function App() {
  const getRandomNumberRecipes = (min,max) =>{
    return parseInt(Math.random() * (max - min) + min);
  }

  let randomNumber = getRandomNumberRecipes(52770,52780);

  const API = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${randomNumber}`;

  const [recipes,setRecipes]= React.useState([]);

  useEffect(()=>{
    async function fetchData(){
      const response = await axios(API);
      setRecipes(response.data);
    }
    fetchData();
  },[])

  console.log(recipes);
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


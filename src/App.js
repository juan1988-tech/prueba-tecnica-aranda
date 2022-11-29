import './App.scss';
import React, { useEffect } from 'react';
import axios from 'axios';
import Header from './containers/Header/Header.jsx';
import Hero from './containers/Hero/Hero.jsx';
import MealCategory from './containers/MealCategories/MealCategories.jsx';
import NewRecipes from './containers/NewRecipes/NewRecipes';
import Footer from './containers/Footer/Footer';


function App() {
  /*obtener 4 numeros aleatorios para 4 recetas*/

/*   let rangeRandomNumbers = [];
  const getRandomIdRecipes = (min,max) =>{
    for(let i=0;i<4;i++){
      const randomNUmberId =  parseInt(Math.random() * (max -min) + min);
      rangeRandomNumbers.push(randomNUmberId);
      console.log(randomNUmberId);
    }
  }

  getRandomIdRecipes(100000,200000);

  console.log(rangeRandomNumbers);
 */


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


//"Crust: make a dough from 250g flour (I like mixing different flours like plain and wholegrain spelt flour), 125g butter, 1 egg and a pinch of salt, press it into a tart form and place it in the fridge. Filling: stir 300g cream cheese and 100ml milk until smooth, add in 3 eggs, 100g grated parmesan cheese and season with salt, pepper and nutmeg. Take the crust out of the fridge and prick the bottom with a fork. Pour in the filling and bake at 175 degrees C for about 25 minutes. Cover the tart with some aluminium foil after half the time. In the mean time, slice about 350g mini tomatoes. In a small pan heat 3tbsp olive oil, 3tbsp white vinegar, 1 tbsp honey, salt and pepper and combine well. Pour over the tomato slices and mix well. With a spoon, place the tomato slices on the tart, avoiding too much liquid on it. Decorate with basil leaves and enjoy"

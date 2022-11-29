import React from 'react';
import './MealCategories.scss';
import MealCategoryCard from '../../components/mealCategoryCard/MealCategoryCard';
import vegetariansImage from '../../assets/icons/ic_vegetarian.svg';
import PrincipalsImage from '../../assets/icons/ic_main.svg';
import PiesImage from '../../assets/icons/ic_cake.svg';
import FastFood from '../../assets/icons/ic_fast-food.svg';
import KidsMenu from '../../assets/icons/ic_kids.svg';
import SoapFood from '../../assets/icons/ic_soup.svg';

const MealCategories = () =>{
  return(
    <section className='meal-categories'>
        <MealCategoryCard mealCategoryImage={vegetariansImage} mealCategoryDescription="Vegetarianos" mealCategoryClassItem='vegetarian-food'/>
        <MealCategoryCard mealCategoryImage={PrincipalsImage} mealCategoryDescription="Principales" mealCategoryClassItem="principal-food"/>
        <MealCategoryCard mealCategoryImage={PiesImage} mealCategoryDescription="Tortas" mealCategoryClassItem="pies-food"/>
        <MealCategoryCard mealCategoryImage={FastFood} mealCategoryDescription="Rápida" mealCategoryClassItem="fast-food"/>
        <MealCategoryCard mealCategoryImage={KidsMenu} mealCategoryDescription="Menú Niños" mealCategoryClassItem="kids-menu"/>
        <MealCategoryCard mealCategoryImage={SoapFood} mealCategoryDescription="Sopas" mealCategoryClassItem="soup-food"/>
    </section>
  )
}

export default MealCategories;
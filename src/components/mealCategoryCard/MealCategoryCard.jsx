import React from 'react';
import './mealCategoryCard.scss';

const MealCategoryCard = ({mealCategoryImage,mealCategoryDescription,mealCategoryClassItem}) =>{
  const mealCategoryClassName = `meal-category-image ${mealCategoryClassItem}`;

  return(
    <article className='meal-category-card'>
      <img className={mealCategoryClassName} src={mealCategoryImage}/>
      <p className='meal-category-description'>{mealCategoryDescription}</p>
    </article>
  )
}

export default MealCategoryCard;



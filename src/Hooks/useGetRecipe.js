import React from 'react';

function useGetRecipe(){
  const [sizeCard, setSizeCard] = React.useState('new-recipe-card');
  const screenWidth = window.screen.width;
  
  const changePerformanceCard = () =>{
    if(screenWidth > 1278){
      setSizeCard('new-recipe-card new-recipe-card-enlarged')
    }
  }
  
  const changeDefaultCard = ()=>{
    if(screenWidth > 1278){
      setSizeCard('new-recipe-card');
    }
  }

  
  return {
    sizeCard,
    changePerformanceCard,
    changeDefaultCard,
  }
}

export default useGetRecipe;






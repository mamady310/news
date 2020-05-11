import React from 'react';
import Food from '../components/Food';

const FoodList = ({ recipe }) => {
    return (
      <div>
        {
          recipe.map((meals, i) => {
            return (
              <Food 
                key={i}
                id={recipe[i].idMeal}
                strYoutube={recipe[i].strYoutube}
                strThumb={recipe[i].strThumb}
                strMeal={recipe[i].strMeal}
                />
            );
          })
        }
      </div>
    );
  }
export default FoodList;
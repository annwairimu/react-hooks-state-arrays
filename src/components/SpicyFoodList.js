import React, { useState } from "react";
import { spicyFoods, getNewRandomSpicyFood } from "../data";

function SpicyFoodList(){
const [foods, setFoods] = useState(spicyFoods);
const [filterBy, setFilterBy] = useState("All");

const foodsToDisplay = foods.filter((food) => {
  if (filterBy === "All") {
    return true;
  } else {
    return food.cuisine === filterBy;
  }
});


const foodList = foodsToDisplay.map((food) => (
  <li key={food.id} onClick={() => handleLiClick(food.id)}>
    {food.name} | Heat: {food.heatLevel} | Cuisine: {food.cuisine}
  </li>
));
}

export default SpicyFoodList;

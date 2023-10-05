import { useState } from "react";
import classes from "./Meal.module.css";
import MealItem from "./MealItem";

const MealList = ({ mealItems, addToCart, cartItems }) => {
  return (
    <div className={classes.mealList}>
      {mealItems.map((item) => (
        <MealItem
          item={item}
          key={item.aboutFood}
          addToCart={addToCart}
          cartItems={cartItems}
        ></MealItem>
      ))}
    </div>
  );
};

export default MealList;

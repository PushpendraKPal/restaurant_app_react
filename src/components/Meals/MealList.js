import { useState } from "react";
import classes from "./Meal.module.css";
import MealItem from "./MealItem";

const MealList = ({ mealItems }) => {
  return (
    <div className={classes.mealList}>
      {mealItems.map((item) => (
        <MealItem item={item} key={item.aboutFood}></MealItem>
      ))}
    </div>
  );
};

export default MealList;

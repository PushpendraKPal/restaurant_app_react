import { useState } from "react";
import MealItem from "./MealItem";
import classes from "./MealList.module.css";

const foodArray = [
  {
    id: 1,
    foodName: "Pizza Margherita",
    aboutFood:
      "Delicious classic Italian pizza with fresh mozzarella and basil.",
    price: 10.99,
  },
  {
    id: 2,
    foodName: "Chicken Stir-Fry",
    aboutFood:
      "A savory mix of chicken, vegetables, and soy sauce served with rice.",
    price: 12.49,
  },
  {
    id: 3,
    foodName: "Spaghetti Carbonara",
    aboutFood: "Creamy pasta dish with pancetta, eggs, and Parmesan cheese.",
    price: 9.99,
  },
  {
    id: 4,
    foodName: "Sushi Platter",
    aboutFood:
      "Assorted sushi rolls and sashimi with pickled ginger and soy sauce.",
    price: 18.99,
  },
  {
    id: 5,
    foodName: "Caesar Salad",
    aboutFood:
      "Fresh romaine lettuce with Caesar dressing, croutons, and parmesan cheese.",
    price: 7.99,
  },
  {
    id: 6,
    foodName: "Beef Burrito",
    aboutFood:
      "Large flour tortilla filled with seasoned beef, beans, and cheese.",
    price: 11.99,
  },
  {
    id: 7,
    foodName: "Vegetable Curry",
    aboutFood:
      "A spicy and flavorful mix of vegetables and curry sauce served with rice.",
    price: 8.99,
  },
  {
    id: 8,
    foodName: "Cheeseburger",
    aboutFood:
      "Juicy beef patty with lettuce, tomato, cheese, and a toasted bun.",
    price: 6.99,
  },
  {
    id: 9,
    foodName: "Mango Smoothie",
    aboutFood: "Refreshing smoothie made with fresh mango, yogurt, and honey.",
    price: 4.99,
  },
  {
    id: 10,
    foodName: "Chocolate Brownie",
    aboutFood:
      "Decadent chocolate brownie topped with vanilla ice cream and hot fudge.",
    price: 5.49,
  },
];

// component ------------------------------------------------------------------------------------------------

const MealList = () => {
  const [mealList, setMealList] = useState([...foodArray]);

  return (
    <div className={classes.mealListContainer}>
      {mealList.map((ele) => {
        return <MealItem item={ele} key={ele.id}></MealItem>;
      })}
    </div>
  );
};

export default MealList;

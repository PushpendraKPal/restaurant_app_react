import { useState } from "react";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import MealList from "./components/Meals/MealList";

const foodArray = [
  {
    foodName: "Pizza Margherita",
    aboutFood:
      "Delicious classic Italian pizza with fresh mozzarella and basil.",
    price: 10.99,
  },
  {
    foodName: "Chicken Stir-Fry",
    aboutFood:
      "A savory mix of chicken, vegetables, and soy sauce served with rice.",
    price: 12.49,
  },
  {
    foodName: "Spaghetti Carbonara",
    aboutFood: "Creamy pasta dish with pancetta, eggs, and Parmesan cheese.",
    price: 9.99,
  },
  {
    foodName: "Sushi Platter",
    aboutFood:
      "Assorted sushi rolls and sashimi with pickled ginger and soy sauce.",
    price: 18.99,
  },
  {
    foodName: "Caesar Salad",
    aboutFood:
      "Fresh romaine lettuce with Caesar dressing, croutons, and parmesan cheese.",
    price: 7.99,
  },
  {
    foodName: "Beef Burrito",
    aboutFood:
      "Large flour tortilla filled with seasoned beef, beans, and cheese.",
    price: 11.99,
  },
  {
    foodName: "Vegetable Curry",
    aboutFood:
      "A spicy and flavorful mix of vegetables and curry sauce served with rice.",
    price: 8.99,
  },
  {
    foodName: "Cheeseburger",
    aboutFood:
      "Juicy beef patty with lettuce, tomato, cheese, and a toasted bun.",
    price: 6.99,
  },
  {
    foodName: "Mango Smoothie",
    aboutFood: "Refreshing smoothie made with fresh mango, yogurt, and honey.",
    price: 4.99,
  },
  {
    foodName: "Chocolate Brownie",
    aboutFood:
      "Decadent chocolate brownie topped with vanilla ice cream and hot fudge.",
    price: 5.49,
  },
];

function App() {
  const [mealItems, setMealItems] = useState(foodArray);
  const [cartItem, setCartItem] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [modal, setModal] = useState(false);

  return (
    <>
      {modal && <Cart showModal={setModal}></Cart>}
      <Header cartCount={cartCount} showModal={setModal}></Header>
      <MealList mealItems={mealItems}></MealList>
    </>
  );
}

export default App;

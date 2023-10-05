import CartList from "./components/Cart/CartList";
import Header from "./components/Header/Header";
import MealList from "./components/Meals/MealList";
import { useState } from "react";
const cartArray = [
  {
    id: 2,
    foodName: "Sushi",
    aboutFood: "sushi is a Japenees dish",
    price: 22.5,
    qty: 0,
  },
];

function App() {
  const [layover, setLayover] = useState(false);
  return (
    <>
      <Header showModal={setLayover}></Header>
      <MealList></MealList>
      {layover && <CartList setLayover={setLayover}></CartList>}
    </>
  );
}

export default App;

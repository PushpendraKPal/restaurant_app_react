import CartList from "./components/Cart/CartList";
import Header from "./components/Header/Header";
import MealList from "./components/Meals/MealList";
import { useState } from "react";
import Context from "./components/context/Context";
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
  const [layover, setLayover] = useState(true);
  return (
    <Context>
      <Header setLayover={setLayover}></Header>
      <MealList></MealList>
      {layover && <CartList setLayover={setLayover}></CartList>}
    </Context>
  );
}

export default App;

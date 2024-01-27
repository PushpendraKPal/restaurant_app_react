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
  const [layover, setLayover] = useState(false);
  return (
    <Context>
      {layover && <CartList setLayover={setLayover}></CartList>}
      {!layover && (
        <div>
          <Header setLayover={setLayover}></Header>
          <MealList></MealList>
        </div>
      )}
    </Context>
  );
}

export default App;

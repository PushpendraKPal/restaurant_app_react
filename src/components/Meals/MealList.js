import MealItem from "./MealItem";
import classes from "./MealList.module.css";
import { CartState } from "../context/Context";

// component ------------------------------------------------------------------------------------------------

const MealList = () => {
  const state = CartState();
  const products = state.state.products;
  return (
    <div className={classes.mealListContainer}>
      {products.map((ele) => {
        return <MealItem item={ele} key={ele.id}></MealItem>;
      })}
    </div>
  );
};

export default MealList;

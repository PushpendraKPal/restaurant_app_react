import IncreaseQty from "./IncreaseQty";
import classes from "./Meal.module.css";
import { useState } from "react";

const MealItem = ({ item, addToCart }) => {
  const [itemQty, setQty] = useState(1);
  return (
    <div className={classes.mealItem}>
      <div>
        <p className={`${classes.bold} ${classes.font20}`}>{item.foodName}</p>
        <p>{item.aboutFood}</p>
        <p className={classes.bold}>{`$${item.price}`}</p>
      </div>
      <div>
        <IncreaseQty
          addToCart={addToCart}
          itemQty={itemQty}
          setQty={setQty}
        ></IncreaseQty>
        <button className={classes.addBtn} onClick={handleAdd}>
          +Add
        </button>
      </div>
    </div>
  );
};

export default MealItem;

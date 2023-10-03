import IncreaseQty from "./IncreaseQty";
import classes from "./Meal.module.css";

const MealItem = ({ item }) => {
  return (
    <div className={classes.mealItem}>
      <div>
        <p className={`${classes.bold} ${classes.font20}`}>{item.foodName}</p>
        <p>{item.aboutFood}</p>
        <p className={classes.bold}>{`$${item.price}`}</p>
      </div>
      <IncreaseQty></IncreaseQty>
    </div>
  );
};

export default MealItem;

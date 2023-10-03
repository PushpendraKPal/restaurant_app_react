import classes from "./Meal.module.css";

const MealItem = ({ item }) => {
  return (
    <div className={classes.mealItem}>
      <p className={`${classes.bold} ${classes.font20}`}>{item.foodName}</p>
      <p>{item.aboutFood}</p>
      <p className={classes.bold}>{`$${item.price}`}</p>
    </div>
  );
};

export default MealItem;

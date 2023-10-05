import classes from "./MealItem.module.css";
import QuantityChanger from "./MealQuantityChanger";

const MealItem = ({ item }) => {
  const addToCart = () => {
    console.log("added to cart");
  };
  return (
    <div className={classes.mealItemContainer}>
      <div className={classes.textContainer}>
        <div className={classes.name}>{item.foodName}</div>
        <div className={classes.about}>{item.aboutFood}</div>
        <div className={classes.price}>{`$ ${item.price}`}</div>
      </div>
      <QuantityChanger
        btnText={`ADD TO CART`}
        handleClick={addToCart}
      ></QuantityChanger>
    </div>
  );
};

export default MealItem;

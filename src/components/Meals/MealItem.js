import { CartState } from "../context/Context";
import classes from "./MealItem.module.css";
import MealQuantityChanger from "./MealQuantityChanger";
import { useState } from "react";

const MealItem = ({ item }) => {
  const [value, setValue] = useState(1);

  const [add, setAdd] = useState(true);

  const { state, dispatch } = CartState();

  const addToCart = () => {
    dispatch({
      type: "ADD_TO_CART",
      payload: { ...item, qty: value },
    });
    setAdd((pre) => !pre);
  };

  const removeFromCart = () => {
    dispatch({
      type: "REMOVE_FROM_CART",
      payload: item,
    });
    setValue(1);
    setAdd((pre) => !pre);
  };

  return (
    <div className={classes.mealItemContainer}>
      <div className={classes.textContainer}>
        <div className={classes.name}>{item.foodName}</div>
        <div className={classes.about}>{item.aboutFood}</div>
        <div className={classes.price}>{`$ ${item.price}`}</div>
      </div>
      <MealQuantityChanger
        value={value}
        setValue={setValue}
        btnText={add ? `ADD TO CART` : `REMOVE`}
        handleClick={add ? addToCart : removeFromCart}
        add={add}
      ></MealQuantityChanger>
    </div>
  );
};

export default MealItem;

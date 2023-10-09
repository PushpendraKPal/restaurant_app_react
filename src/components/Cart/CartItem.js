import { useState } from "react";
import QuantityChanger from "../UI/QuantityChanger";
import Button from "../UI/button";
import classes from "./CartItem.module.css";
import { CartState } from "../context/Context";

const CartItem = ({ item, cartList }) => {
  const [value, setValue] = useState(item.qty);

  const { state, dispatch } = CartState();

  const handleClick = () => {
    dispatch({ type: "REMOVE_FROM_CART", payload: item });
  };
  const handleChange = () => {
    dispatch({ type: "CHANGE", payload: item });
  };

  return (
    <div className={classes.cartItemContainer}>
      <div>
        <div className={classes.name}>{item.foodName}</div>
        <div className={classes.price}>{`$ ${item.price}`}</div>
      </div>
      <div>{`X ${item.qty}`}</div>
      <div className={classes.qtyControl}>
        <div className={classes.conContainer}>
          <QuantityChanger
            value={value}
            setValue={setValue}
            handleChange={handleChange}
          ></QuantityChanger>
          <Button handleClick={handleClick} btnText={`REMOVE`}></Button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;

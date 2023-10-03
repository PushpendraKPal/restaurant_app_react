import { useState } from "react";
import classes from "./CartButton.module.css";

const CartButton = () => {
  const [qty, setQty] = useState(0);
  return (
    <button className={classes.cartButton}>
      <span className={`material-symbols-outlined`}> shopping_cart </span>
      Your Cart
      <span className={classes.qty}> {qty} </span>
    </button>
  );
};

export default CartButton;

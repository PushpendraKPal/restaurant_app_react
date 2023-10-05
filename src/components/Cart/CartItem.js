import classes from "./cart.module.css";

const CartItem = ({ item }) => {
  return (
    <li className={classes.cartItemContainer}>
      <div>{item.foodName}</div>
      <div>{item.price}</div>
      <div>{item.qty}</div>
    </li>
  );
};

export default CartItem;

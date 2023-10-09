import classes from "./CartButton.module.css";
import { CartState } from "../context/Context";

const CartButton = (props) => {
  const { state } = CartState();

  const cartCount = state.cart.reduce((acc, curr) => {
    return acc + curr.qty;
  }, 0);

  return (
    //<button onClick={props.handleClick}>Click me</button>
    <div className={classes.cartBtn} onClick={props.handleClick}>
      <span className="material-symbols-outlined">shopping_cart</span>
      <span>{`Cart`}</span>
      <span>{cartCount}</span>
    </div>
  );
};

export default CartButton;

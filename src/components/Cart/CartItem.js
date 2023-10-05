import QuantityChanger from "../UI/QuantityChanger";
import Button from "../UI/button";
import classes from "./CartItem.module.css";

const CartItem = ({ item }) => {
  const handleClick = () => {};

  return (
    <div className={classes.cartItemContainer}>
      <div>
        <div className={classes.name}>{item.foodName}</div>
        <div className={classes.price}>{`$ ${item.price}`}</div>
      </div>
      <div>{`x ${item.qty}`}</div>
      <div className={classes.qtyControl}>
        <div className={classes.conContainer}>
          <QuantityChanger></QuantityChanger>
          <Button handleClick={handleClick} btnText={`REMOVE`}></Button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;

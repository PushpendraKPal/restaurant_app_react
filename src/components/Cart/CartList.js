import { useState } from "react";
import CartItem from "./CartItem";
import classes from "./CartList.module.css";
import Button from "../UI/button";
import { CartState } from "../context/Context";

// Component ---------------------------------------------------------------------------------------------

const CartList = ({ setLayover }) => {
  const { state, dispatch } = CartState();

  const handleCancel = () => {
    setLayover(false);
  };
  const handleOrder = () => {};

  const cartList = [...state.cart];

  let totalPrice = cartList.reduce((acc, curr) => {
    return acc + curr.price * curr.qty;
  }, 0);

  // const totalPrice = state.cart.reducer((acc, curr) => {
  //   return acc + curr.price * curr.qty;
  // }, 0);

  return (
    <>
      <div className={classes.cartListContainer}>
        <h1 className={classes.heading}>Cart</h1>
        {cartList.map((ele) => {
          return (
            <CartItem item={ele} key={ele.id} cartList={cartList}></CartItem>
          );
        })}
        <div className={classes.totalPrice}>{`Total Price: ${totalPrice}`}</div>
        <div className={classes.btnContainer}>
          <Button handleClick={handleCancel} btnText={`CANCEL`}></Button>
          <Button
            onClick={handleOrder}
            btnText={`ORDER`}
            className={classes.btn}
          ></Button>
        </div>
      </div>
    </>
  );
};

export default CartList;

import { useState } from "react";
import CartItem from "./CartItem";
import classes from "./CartList.module.css";
import Button from "../UI/button";

const cartArray = [
  {
    id: 1,
    foodName: "Pizza Margherita",
    aboutFood:
      "Delicious classic Italian pizza with fresh mozzarella and basil.",
    price: 10.99,
    qty: 3,
  },
  {
    id: 2,
    foodName: "Chicken Stir-Fry",
    aboutFood:
      "A savory mix of chicken, vegetables, and soy sauce served with rice.",
    price: 12.49,
    qty: 1,
  },
  {
    id: 3,
    foodName: "Spaghetti Carbonara",
    aboutFood: "Creamy pasta dish with pancetta, eggs, and Parmesan cheese.",
    price: 9.99,
    qty: 4,
  },
];

// Component ---------------------------------------------------------------------------------------------

const CartList = ({ setLayover }) => {
  const [cartList, setCartList] = useState([...cartArray]);
  const totalPrice = 500;
  const handleClick = () => {
    setLayover(false);
  };
  const handleOrder = () => {};
  return (
    <>
      <div className={classes.cartListContainer}>
        {cartList.map((ele) => {
          return <CartItem item={ele} key={ele.id}></CartItem>;
        })}
        <div
          className={classes.totalPrice}
        >{`Total Price: $ ${totalPrice}`}</div>
        <div className={classes.btnContainer}>
          <Button onClick={handleClick} btnText={`CANCEL`}></Button>
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

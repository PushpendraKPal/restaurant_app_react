import classes from "./CartButton.module.css";

const CartButton = ({ showModal }) => {
  const cartCount = 10;
  return (
    <div className={classes.cartBtn} onClick={() => showModal(true)}>
      <span className="material-symbols-outlined">shopping_cart</span>
      <span>{`Cart`}</span>
      <span>{cartCount}</span>
    </div>
  );
};

export default CartButton;

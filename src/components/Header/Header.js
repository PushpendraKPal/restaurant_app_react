import CartButton from "../UI/CartButton";
import classes from "./Header.module.css";
import header from "../../assets/images/header.png";
import Summary from "../UI/Summary";

const Header = ({ showModal }) => {
  const cartCount = 10;

  const handleClick = () => {
    console.log("hiiiii");
    showModal(true);
  };
  return (
    <>
      <header className={classes.headerContainer}>
        <h2 className={classes.heading}>Kumar's Kitchen & Cafe</h2>
        <CartButton cartCount={cartCount} showModal={showModal}></CartButton>
      </header>
      <img src={header} className={classes.image}></img>
      <Summary></Summary>
    </>
  );
};

export default Header;

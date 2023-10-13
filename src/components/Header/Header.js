import CartButton from "../UI/CartButton";
import classes from "./Header.module.css";
import header from "../../assets/images/header.png";
import Summary from "../UI/Summary";

const Header = ({ setLayover }) => {
  const handleClick = () => {
    setLayover(true);
  };
  return (
    <>
      <header className={classes.headerContainer}>
        <h2 className={classes.heading}>Kumar's Kitchen & Cafe</h2>
        <CartButton handleClick={handleClick}></CartButton>
      </header>
      <img src={header} className={classes.image}></img>
      <Summary></Summary>
    </>
  );
};

export default Header;

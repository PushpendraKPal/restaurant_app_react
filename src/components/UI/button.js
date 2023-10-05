import classes from "./button.module.css";

const Button = ({ handleClick, btnText }) => {
  return (
    <button onClick={handleClick} className={classes.btn}>
      {btnText}
    </button>
  );
};

export default Button;

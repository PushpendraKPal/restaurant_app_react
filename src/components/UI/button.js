import classes from "./button.module.css";

const Button = (props) => {
  return (
    <button
      onClick={props.handleClick}
      className={props.add ? classes.btn : classes.rmBtn}
    >
      {props.btnText}
    </button>
  );
};
export default Button;

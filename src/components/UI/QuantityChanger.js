import classes from "./QuantityChanger.module.css";

const QuantityChanger = (props) => {
  const { value, setValue, handleChange } = props;
  const handleIncrement = () => {
    setValue((pre) => {
      if (pre <= 4 && pre >= 1) {
        return pre + 1;
      } else {
        return 5;
      }
    });
    handleChange && handleChange();
  };

  const handleDecrement = () => {
    setValue((pre) => {
      if (pre >= 2 && pre <= 5) {
        return pre - 1;
      } else {
        return 1;
      }
    });
    handleChange && handleChange();
  };

  return (
    <div className={classes.controlContainer}>
      <div className={classes.symbol} onClick={handleDecrement}>
        <span className="material-symbols-outlined">remove_circle</span>
      </div>
      <div className={classes.value}>{value}</div>
      <div className={classes.symbol} onClick={handleIncrement}>
        <span className="material-symbols-outlined">add_circle</span>
      </div>
    </div>
  );
};

export default QuantityChanger;

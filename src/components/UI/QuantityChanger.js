import classes from "./QuantityChanger.module.css";
import { useState } from "react";

const QuantityChanger = () => {
  const [value, setValue] = useState(1);

  const handleIncrement = () => {
    setValue((pre) => {
      if (pre <= 4 && pre >= 1) {
        return pre + 1;
      } else {
        return 5;
      }
    });
  };

  const handleDecrement = () => {
    setValue((pre) => {
      if (pre >= 2 && pre <= 5) {
        return pre - 1;
      } else {
        return 1;
      }
    });
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

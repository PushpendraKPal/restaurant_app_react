import { useState } from "react";
import classes from "./Meal.module.css";

const IncreaseQty = ({ addToCart, setQty, itemQty }) => {
  const [value, setValue] = useState(itemQty);

  const handleChange = (e) => {
    setValue(() => e.target.value);
  };

  const handleSubmit = () => {
    setQty(value);
  };

  return (
    <div className={classes.increaseQty}>
      <form onSubmit={handleSubmit}>
        <label>Amount</label>
        <input
          type="number"
          className={classes.inputAmount}
          min="1"
          max="5"
          step="1"
          defaultValue="1"
          onChange={handleChange}
        ></input>
      </form>
    </div>
  );
};

export default IncreaseQty;

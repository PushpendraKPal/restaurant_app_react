import classes from "./Meal.module.css";

const IncreaseQty = () => {
  return (
    <div className={classes.increaseQty}>
      <label>Amount</label>
      <input
        type="number"
        className={classes.inputAmount}
        min="1"
        max="5"
        step="1"
        defaultValue="1"
      ></input>
      <br></br>
      <button className={classes.addBtn}>+Add</button>
    </div>
  );
};

export default IncreaseQty;

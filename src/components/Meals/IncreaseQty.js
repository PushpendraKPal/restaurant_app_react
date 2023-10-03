import classes from "./Meal.module.css";

const IncreaseQty = () => {
  return (
    <div className={classes.increaseQty}>
      <label>Amount</label>
      <input type="text" className={classes.inputAmount}></input>
      <br></br>
      <button className={classes.addBtn}>+Add</button>
    </div>
  );
};

export default IncreaseQty;

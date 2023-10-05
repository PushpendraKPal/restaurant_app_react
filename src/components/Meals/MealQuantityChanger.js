import Button from "../UI/button";
import QuantityChanger from "../UI/QuantityChanger";

const MealQuantityChanger = ({ btnText, handleClick }) => {
  return (
    <div>
      <QuantityChanger></QuantityChanger>
      <Button btnText={btnText} handleClick={handleClick}>
        {btnText}
      </Button>
    </div>
  );
};

export default MealQuantityChanger;

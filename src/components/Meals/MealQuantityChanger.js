import Button from "../UI/button";
import QuantityChanger from "../UI/QuantityChanger";

const MealQuantityChanger = ({
  value,
  setValue,
  btnText,
  handleClick,
  add,
}) => {
  return (
    <div>
      <QuantityChanger
        value={value}
        setValue={add ? setValue : () => {}}
      ></QuantityChanger>
      <Button btnText={btnText} handleClick={handleClick} add={add}>
        {btnText}
      </Button>
    </div>
  );
};

export default MealQuantityChanger;

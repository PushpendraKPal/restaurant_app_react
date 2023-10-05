import Model from "../UI/Modal";

const Cart = ({ showModal }) => {
  const cartItems = [
    {
      id: 124,
      foodName: "Sushi",
      aboutFood: "sushi is a Japenees dish",
      price: 22.5,
    },
  ];
  return (
    <Model>
      <ul>
        {cartItems.map((item) => (
          <li>
            <div>{item.foodName}</div>
            <div>{item.price}</div>
          </li>
        ))}
      </ul>
      <div>
        <button onClick={() => showModal(false)}>Cancel</button>
        <button>Order</button>
      </div>
    </Model>
  );
};

export default Cart;

const cartReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "ADD_TO_CART": {
      return { ...state, cart: [...state.cart, payload] };
    }
    case "REMOVE_FROM_CART": {
      return {
        ...state,
        cart: state.cart.filter((ele) => ele.id !== payload.id),
      };
    }
    case "CHANGE": {
      //return { ...state, cart: [...state.cart, payload] };
      console.log(payload);
    }
  }
};

export default cartReducer;

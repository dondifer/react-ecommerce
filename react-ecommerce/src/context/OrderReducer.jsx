const orders = (state, action) => {
  switch (action.type) {
    case "MAKE_ORDERS":
      return {
        ...state,
        orders: action.payload,
      };

    default:
      return state;
  }
};

export default orders;

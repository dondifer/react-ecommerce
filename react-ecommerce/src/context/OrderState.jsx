import { createContext, useReducer } from "react";
import OrderReducer from "./OrderReducer";
import axios from "axios";
import { API_URL } from "../../config/key";

const initialState = {
  orders: [],
};

export const OrdersContext = createContext(initialState);

// eslint-disable-next-line react/prop-types
export const ProductsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(OrderReducer, initialState);

  const makeOrder = async () => {
    const res = await axios.get(API_URL + "/orders");

    dispatch({
      type: "MAKE_ORDERS",
      payload: res.data,
    });

    return res;
  };
  return (
    <OrdersContext.Provider
      value={{
        orders: state.orders,
        makeOrder,
      }}
    >
      {children}
    </OrdersContext.Provider>
  );
};

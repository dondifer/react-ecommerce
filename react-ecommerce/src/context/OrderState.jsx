import { createContext, useReducer } from "react";
import OrderReducer from "./OrderReducer";
import axios from "axios";
import { API_URL } from "../../config/key";

const initialState = {
  orders: [],
};

export const OrdersContext = createContext(initialState);

// eslint-disable-next-line react/prop-types
export const OrderProvider = ({ children }) => {
  const [state, dispatch] = useReducer(OrderReducer, initialState);
  const token = JSON.parse(localStorage.getItem("token"));
  const makeOrder = async (order) => {
    try {
      const res = await axios.post(
        API_URL + "/orders",
        { productIds: order },

        {
          headers: {
            authorization: token,
          },
        }
      );

      dispatch({
        type: "MAKE_ORDERS",
        payload: res.data,
      });
    } catch (error) {
      console.error(error);
    }
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

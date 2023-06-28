import { createContext, useReducer } from "react";
import ProductReducer from "./ProductReducer";
import axios from "axios";
import { API_URL } from "../../config/key";

const initialState = {
  products: [],
};

export const ProductsContext = createContext(initialState);

// eslint-disable-next-line react/prop-types
export const ProductsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(ProductReducer, initialState);

  const getProducts = async () => {
    const res = await axios.get(API_URL + "/products/getAll");

    dispatch({
      type: "GET_PRODUCTS",
      payload: res.data,
    });

    return res;
  };
  return (
    <ProductsContext.Provider
      value={{
        products: state.products,
        getProducts,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

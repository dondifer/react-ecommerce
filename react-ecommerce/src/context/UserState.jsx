/* eslint-disable react/prop-types */
import { createContext, useReducer } from "react";
import UserReducer from "./UserReducer";
import axios from "axios";
import { API_URL } from "../../config/key";

const initialState = {
  user: {},
  token: "",
};

export const UserContext = createContext(initialState);
export const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(UserReducer, initialState);

  const registerNewUser = async (user) => {
    const response = await axios.post(`${API_URL}/users/register`, user);

    dispatch({
      type: "POST_NEW_USER",
      payload: response.data.user,
    });
  };

  const login = async (user) => {
    const res = await axios.post(API_URL + "/users/login", user);

    dispatch({
      type: "LOGIN",
      payload: res.data,
    });

    if (res.data) {
      localStorage.setItem("token", JSON.stringify(res.data.token));
    }
  };

  const logout = async () => {
    const res = await axios.delete(API_URL + "/users/logout", {
      headers: {
        authorization: state.token,
      },
    });

    dispatch({
      type: "LOGOUT",
      payload: res.data,
    });

    if (res.data) {
      localStorage.setItem("token", JSON.stringify(""));
    }
  };

  return (
    <UserContext.Provider
      value={{
        data: state.data,
        registerNewUser,
        token: state.token,
        login,
        logout,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

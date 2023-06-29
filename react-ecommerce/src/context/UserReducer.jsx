const user = (state, action) => {
  switch (action.type) {
    case "POST_NEW_USER":
      return {
        ...state,
        data: action.payload,
      };
    case "LOGIN":
      return {
        ...state,
        data: action.payload,
        token: action.payload.token,
      };
    case "LOGOUT":
      return {
        ...state,
        data: null,
        token: "",
      };
    case "GET_INFO":
      return {
        ...state,
        data: action.payload,
      };
    default:
      return state;
  }
};

export default user;

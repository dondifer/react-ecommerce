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
        data: action.payload.user,
        token: action.payload.token,
      };

    default:
      return state;
  }
};

export default user;

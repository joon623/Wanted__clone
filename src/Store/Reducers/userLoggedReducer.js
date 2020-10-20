const userLoggedReducer = (state = false, action) => {
  switch (action.type) {
    case "USER_LOGGED":
      return true;
    case "USER_LOGOUT":
      return false;
    default:
      return state;
  }
};

export default userLoggedReducer;

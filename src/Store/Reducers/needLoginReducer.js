const needLoginReducer = (state = false, action) => {
  switch (action.type) {
    case 'USER_NEED_LOGIN':
      return true;
    case 'USER_EXIT_LOGIN':
      return false;
    default:
      return state;
  }
};

export default needLoginReducer;

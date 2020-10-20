const userSearchInput = (state = '', action) => {
  switch (action.type) {
    case 'USER_SEARCH_INPUT':
      return action.payload;
    default:
      return state;
  }
};

export default userSearchInput;

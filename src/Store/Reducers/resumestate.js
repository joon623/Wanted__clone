const resumestateReducer = (state = 'intro', action) => {
  switch (action.type) {
    case 'RESUME_STATE':
      return action.payload;
    default:
      return state;
  }
};

export default resumestateReducer;

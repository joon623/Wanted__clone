const clickedButton = (state = 'manage', action) => {
  switch (action.type) {
    case 'CLICK_BUTTON':
      return action.payload;
    case 'WRITING_CLICK_BUTTON':
      return action.payload;
    default:
      return state;
  }
};

export default clickedButton;

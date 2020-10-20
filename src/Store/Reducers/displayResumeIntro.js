const displayResumeIntro = (state = true, action) => {
  switch (action.type) {
    case 'OPEN_INTRORESUME':
      return true;
    case 'CLOSE_INTRORESUME':
      return false;
    default:
      return state;
  }
};

export default displayResumeIntro;

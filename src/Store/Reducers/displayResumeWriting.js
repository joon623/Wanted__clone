const displayResumeWriting = (state = false, action) => {
  switch (action.type) {
    case 'OPEN_RESUMEWRITING':
      return true;
    case 'CLOSE_RESUMEWRITING':
      return false;
    default:
      return state;
  }
};

export default displayResumeWriting;

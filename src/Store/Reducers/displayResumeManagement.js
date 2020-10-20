const displayResumeManagement = (state = true, action) => {
  switch (action.type) {
    case 'OPEN_RESUMEMANAGEMENT':
      return true;
    case 'CLOSE_RESUMEMANAGEMENT':
      return false;
    default:
      return state;
  }
};

export default displayResumeManagement;

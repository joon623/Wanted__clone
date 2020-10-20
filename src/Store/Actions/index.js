export const UserLogin = () => {
  return {
    type: 'USER_LOGGED',
  };
};

export const UserLogOut = () => {
  return {
    type: 'USER_LOGOUT',
  };
};

export const UserSearchInput = (input) => {
  return {
    type: 'USER_SEARCH_INPUT',
    payload: input,
  };
};

export const SearchedData = (data) => {
  return {
    type: 'SEARCHED_DATA',
    payload: data,
  };
};

export const RecruitList = (data) => {
  return {
    type: 'RECRUIT_DATA',
    payload: data,
  };
};

export const NeedLogin = () => {
  return {
    type: 'USER_NEED_LOGIN',
  };
};

export const ExitLogin = () => {
  return {
    type: 'USER_EXIT_LOGIN',
  };
};

export const OpenResumeManagement = (data) => {
  return {
    type: 'OPEN_RESUMEMANAGEMENT',
  };
};

export const CloseResumeManagement = () => {
  return {
    type: 'CLOSE_RESUMEMANAGEMENT',
  };
};

export const OpenResumeWriting = () => {
  return {
    type: 'OPEN_RESUMEWRITING',
  };
};

export const CloseResumeWriting = () => {
  return {
    type: 'CLOSE_RESUMEWRITING',
  };
};

export const OpenIntroResume = (data) => {
  return {
    type: 'OPEN_INTRORESUME',
  };
};

export const CloseIntroResume = (data) => {
  return {
    type: 'CLOSE_INTRORESUME',
  };
};

export const ManagingClickButton = (button) => {
  return {
    type: 'MANAGING_CLICK_BUTTON',
    payload: 'manage',
  };
};

export const WritingtButtonClick = (button) => {
  return {
    type: 'WRITING_CLICK_BUTTON',
    payload: 'writing',
  };
};

export const ResumeState = (data) => {
  return {
    type: 'RESUME_STATE',
    payload: data,
  };
};

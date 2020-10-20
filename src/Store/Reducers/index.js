import { combineReducers } from 'redux';
import userLoggedReducer from './userLoggedReducer';
import userSearchInput from './userSearchInput';
import searchedDataReducer from './searchedData';
import recruitListReducer from './recruitList';
import needLoginReducer from './needLoginReducer';
import displayResumeWriting from './displayResumeWriting';
import displayResumeManagement from './displayResumeManagement';
import clickedButton from './clickedButton';
import displayResumeIntro from './displayResumeIntro';
import resumestateReducer from './resumestate';

export default combineReducers({
  userLoggedReducer,
  userSearchInput,
  searchedDataReducer,
  recruitListReducer,
  needLoginReducer,
  displayResumeWriting,
  displayResumeManagement,
  clickedButton,
  displayResumeIntro,
  resumestateReducer,
});

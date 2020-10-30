import { combineReducers } from 'redux';
import userLoggedReducer from './userLoggedReducer';
import userSearchInput from './userSearchInput';
import searchedDataReducer from './searchedData';
import recruitListReducer from './recruitList';
import needLoginReducer from './needLoginReducer';
import resumestateReducer from './resumestate';

export default combineReducers({
  userLoggedReducer,
  userSearchInput,
  searchedDataReducer,
  recruitListReducer,
  needLoginReducer,
  resumestateReducer,
});

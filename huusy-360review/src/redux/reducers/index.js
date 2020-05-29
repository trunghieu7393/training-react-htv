import { combineReducers } from 'redux';
import sagasReducer from './sagasReducer';
import ui from './ui';
import api from './api';
import exercises from './exercises';
export default combineReducers({
  
  sagasReducer,
  api,
  ui,
  exercises,
});
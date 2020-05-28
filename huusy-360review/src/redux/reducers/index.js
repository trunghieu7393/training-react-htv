import { combineReducers } from 'redux';
import sagasReducer from './sagasReducer';
import ui from './ui';
import api from './api'
export default combineReducers({
  
  sagasReducer,
  api,
  ui
});
import { combineReducers } from 'redux';
import testReducer from './testReducer';
import sagasReducer from './sagasReducer';
export default combineReducers({
  test: testReducer,
  sagasReducer
});
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/';
import createSagaMiddleware from 'redux-saga';

//Saga file
import rootSaga from '../sagas/'

const sagaMiddleware = createSagaMiddleware();
//Middleware
const middleWares = [thunk, sagaMiddleware];

const initialState = {};
const applyMW = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() ?
  compose(
    applyMiddleware(...middleWares),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  ) : applyMiddleware(...middleWares);

export default createStore(
  rootReducer,
  initialState,
  applyMW

);

sagaMiddleware.run(rootSaga);

// const store = createStore(
//   reducer,
//   applyMiddleware(sagaMiddleware)
// )

//const action = type => store.dispatch({ type })

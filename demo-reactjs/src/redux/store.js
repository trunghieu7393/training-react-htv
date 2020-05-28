// import { applyMiddleware, createStore } from 'redux';
// import createSagaMiddleware from 'redux-saga';
// // import thunk from 'redux-thunk';
// import rootReducer from './../reducers/index';
// import rootSaga from './../sagas';

// const sagaMiddleware = createSagaMiddleware()
// const store = createStore(
//   rootReducer,
//   applyMiddleware(sagaMiddleware)
// )
// sagaMiddleware.run(rootSaga)

// export default store;

import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from '../reducers/index';

import createSagaMiddleware from 'redux-saga'
import rootSaga from '../sagas';

const sagaMiddleware = createSagaMiddleware();
const middleWares = [sagaMiddleware];

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
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

import createSagaMiddleware from 'redux-saga'
import rootSaga from '../sagas';

const sagaMiddleware = createSagaMiddleware();
const middleWares = [thunk, sagaMiddleware];

const initialState = {};
const applyMW = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() ?
  compose(
    applyMiddleware(...middleWares),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  ) : applyMiddleware(...middleWares);

//  const composeEnhancers = process.env.NODE_ENV !== 'production' && typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
//    shouldHotReload:false,
//  }) : compose;  
// const enhancers=[applyMiddleware(...middleWares)];
// composeEnhancers(...enhancers);

  export default createStore( 
    rootReducer,
    initialState,
    applyMW 
  
);
sagaMiddleware.run(rootSaga);
// const action = type => store.dispatch({type})
// export default store;


// const composeEnhancers = process.env.NODE_ENV !== 'production' && typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
//   shouldHotReload:false,
// }) : compose;

// const sagaMiddleware = createSagaMiddleware();

// const  configureStore=()=> {
//   const middleWares = [sagaMiddleware];
//   const enhancers=[applyMiddleware(...middleWares)];
//   const store=createStore(rootReducer, composeEnhancers(...enhancers));
//   sagaMiddleware.run(rootSaga)
//   return store;
// }
// export default configureStore;
// const sagaMiddleware = createSagaMiddleware()

// const store = createStore(
//   rootReducer,
//   applyMiddleware(sagaMiddleware)
// )
// sagaMiddleware.run(rootSaga)

// const action = type => store.dispatch({type})

// export default store;
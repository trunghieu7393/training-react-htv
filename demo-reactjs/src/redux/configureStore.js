import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
// import thunk from 'redux-thunk';
import rootReducer from './../reducers/index';
import rootSaga from './../sagas';

// const composeEnhancers =
//     process.env.NODE_ENV !== 'production' &&
//         typeof window === 'object' &&
//         window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
//             shouldHotReload: false,
//         })
//         : compose;

// // create the saga middleware
// const sagaMiddleware = createSagaMiddleware();

// const configureStore = () => {
//     const middlewares = [sagaMiddleware];
//     const enhancers = [applyMiddleware(...middlewares)];
//     const store = createStore(rootReducer, composeEnhancers(...enhancers));

//     // then run the saga
//     sagaMiddleware.run(rootSaga);

//     return store;
// }

// export default configureStore;

// create the saga middleware
const sagaMiddleware = createSagaMiddleware()
// mount it on the Store
const store = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware)
)

// then run the saga
sagaMiddleware.run(rootSaga)

export default store;
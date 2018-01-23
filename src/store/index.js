import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducer from './reducers';
import rootSaga from '../sagas';

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();

const initailState = window.__initailState__ || {}; // maybe from server render

// mount it on the Store
const store = createStore(
  reducer,
  initailState,
  compose(applyMiddleware(sagaMiddleware),
  window.devToolsExtension ? window.devToolsExtension() : f => f),
);
// then run the saga
sagaMiddleware.run(rootSaga);

export default store;

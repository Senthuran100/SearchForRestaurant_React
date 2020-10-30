import { createStore, applyMiddleware } from 'redux' 

import { composeWithDevTools } from 'redux-devtools-extension'

import createSagaMiddleware from 'redux-saga'

import rootSaga from './Saga'

import rootReducer from './Reducer'

const sagaMiddleware = createSagaMiddleware()

const store = createStore(
  rootReducer,
  {},
  composeWithDevTools(applyMiddleware(sagaMiddleware))
)

// Run redux-saga
sagaMiddleware.run(rootSaga)

export default store
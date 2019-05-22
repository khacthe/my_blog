import { compose, createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer, createTransform } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2'; // Merge 2 level state\
import createSagaMiddleware from 'redux-saga';

import rootReducer from '../reducers/rootReducer';
import sagas from '../sagas';

const persistConfig = {
  key: 'app',
  storage,
  stateReconciler: autoMergeLevel2,
  whitelist: ['auth'],
  transforms: [createTransform(
    (inboundState) => ({ ...inboundState, error: '' }),
    (outboundState) => ({ ...outboundState, error: '' }),
    { whitelist: ['auth'] }
  )],
};

const sagaMiddleware = createSagaMiddleware();

const pReducer = persistReducer(persistConfig, rootReducer);
const configureStore = (initialState = {}) => {
  const store  = createStore(
    pReducer,
    initialState,
    compose(
      applyMiddleware(sagaMiddleware),
      process.env.NODE_ENV === 'development' && window.devToolsExtension
        ? window.devToolsExtension()
        : f => f,
    ),
  );
  
  sagaMiddleware.run(sagas);
  persistStore(store);
  return store;
}

export default configureStore();
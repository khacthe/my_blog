import { combineReducers } from 'redux';

import homeReducer from './homeReducer';
import postDetailReducer from './postDetailReducer';

const baseReducer = combineReducers({
  homeReducer,
  postDetailReducer,
});

const rootReducer = (state, action) => (
  baseReducer(state, action)
);

export default rootReducer;

import { combineReducers } from 'redux';

import homeReducer from './homeReducer';
import postDetailReducer from './homeReducer';

const baseReducer = combineReducers({
  homeReducer,
  postDetailReducer,
});

const rootReducer = (state, action) => (
  baseReducer(state, action)
);

export default rootReducer;

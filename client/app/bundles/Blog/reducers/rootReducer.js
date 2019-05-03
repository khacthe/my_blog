import { combineReducers } from 'redux';

import homeReducer from './homeReducer';

const baseReducer = combineReducers({
  homeReducer
});

const rootReducer = (state, action) => (
  baseReducer(state, action)
);

export default rootReducer;
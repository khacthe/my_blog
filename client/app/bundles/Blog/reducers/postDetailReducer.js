import { combineActions, handleActions } from 'redux-actions';

import {
  getPostDetailSuccess,
  getPostDetailError,
} from '../actions/homeAction';

export const initialState = {
  isGetPostDetailLoading: false,
  error: '',
};

const reducer = handleActions({
  [combineActions(
    getPostDetailSuccess,
    getPostDetailError
  )]: (state, action) => ({
    ...state, ...action.payload,
  }),
}, initialState);

export default reducer;

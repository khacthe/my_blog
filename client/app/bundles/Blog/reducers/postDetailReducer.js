import { combineActions, handleActions } from 'redux-actions';

import {
  getPost,
  getPostSuccess,
  getPostError,
} from '../actions/homeAction';

export const initialState = {
  getPostLoading: false,
  error: '',
};

const reducer = handleActions({
  [combineActions(
    getPostSuccess,
    getPostError
  )]: (state, action) => ({
    ...state, ...action.payload,
  }),
}, initialState);

export default reducer;

import { combineActions, handleActions } from 'redux-actions';

import {
  getPosts,
  getPostsSuccess,
  getPostsError,
} from '../actions/homeAction';

export const initialState = {
  getPostsLoading: false,
  error: '',
};

const reducer = handleActions({
  [combineActions(
    getPostsSuccess,
    getPostsError
  )]: (state, action) => ({
    ...state, ...action.payload,
  }),
}, initialState);

export default reducer;

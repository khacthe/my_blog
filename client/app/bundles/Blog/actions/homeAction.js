import { createActions } from 'redux-actions';
import { ActionsTypes } from '../constants';

export const {
  getPosts,
  getPostsSuccess,
  getPostsError,
  getPostsLoading
} = createActions({
  [ActionsTypes.GET_POSTS]: payload => payload,
  [ActionsTypes.GET_POSTS_SUCCESS]: payload => payload,
  [ActionsTypes.GET_POSTS_ERROR]: payload => payload,
  [ActionsTypes.GET_POSTS_LOADING]: payload => payload,
});

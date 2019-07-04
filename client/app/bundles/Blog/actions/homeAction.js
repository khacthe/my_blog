import { createActions } from 'redux-actions';
import { ActionsTypes } from '../constants';

export const {
  getPosts,
  getPostsSuccess,
  getPostsError,
  getPostsLoading,

  getPost,
  getPostSuccess,
  getPostError,
  getPostLoading,
} = createActions({
  [ActionsTypes.GET_POSTS]: payload => payload,
  [ActionsTypes.GET_POSTS_SUCCESS]: payload => payload,
  [ActionsTypes.GET_POSTS_ERROR]: payload => payload,
  [ActionsTypes.GET_POSTS_LOADING]: payload => payload,

  [ActionsTypes.GET_POST]: payload => payload,
  [ActionsTypes.GET_POST_SUCCESS]: payload => payload,
  [ActionsTypes.GET_POST_ERROR]: payload => payload,
  [ActionsTypes.GET_POST_LOADING]: payload => payload,
});

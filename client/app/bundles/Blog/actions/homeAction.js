import { createActions } from 'redux-actions';
import { ActionsTypes } from '../constants';

export const {
  getPosts,
  getPostsSuccess,
  getPostsError,
  getPostsLoading,

  getPostDetail,
  getPostDetailSuccess,
  getPostDetailError,
  getPostDetailLoading,
} = createActions({
  [ActionsTypes.GET_POSTS]: payload => payload,
  [ActionsTypes.GET_POSTS_SUCCESS]: payload => payload,
  [ActionsTypes.GET_POSTS_ERROR]: payload => payload,
  [ActionsTypes.GET_POSTS_LOADING]: payload => payload,

  [ActionsTypes.GET_POST_DETAIL]: payload => payload,
  [ActionsTypes.GET_POST_DETAIL_SUCCESS]: payload => payload,
  [ActionsTypes.GET_POST_DETAIL_ERROR]: payload => payload,
  [ActionsTypes.GET_POST_DETAIL_LOADING]: payload => payload,
});

import { put, call, takeLatest, all } from 'redux-saga/effects';

import {
  getPosts,
  getPostsLoading,
  getPostsSuccess,
  getPostsError,
} from '../actions/homeAction';
import { PostApi } from '../services/restClient/post';
// import getDataRequest from '../utils/dataRquest';

export function* getPostsSaga({ payload }) {
  // const dataRquest = getDataRequest(payload);

  try {
    yield put(getPostsLoading({ isLoadingGetPostsList: true }));
    const { data } = yield call([PostApi, PostApi.getPosts]);
    yield put(getPostsSuccess({data}));

  } catch (error) {
    yield put(getPostsError({ error: error.error_code }));
  } finally {
    yield put(getPostsLoading({ isLoadingGetPostsList: false }));
  }
}

export default function* root() {
  yield all([
    takeLatest(getPosts, getPostsSaga),
  ]);
}


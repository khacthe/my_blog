import { put, call, takeLatest, all } from 'redux-saga/effects';

import {
  getPosts,
  getPostsLoading,
  getPostsSuccess,
  getPostsError,

  getPostDetail,
  getPostDetailError,
  getPostDetailLoading,
  getPostDetailSuccess,
} from '../actions/homeAction';
import { PostApi } from '../services/restClient/post';
import { getDataRequest } from '../utils/dataRequest';

export function* getPostsSaga({ payload }) {
  const dataRquest = getDataRequest(payload);

  try {
    yield put(getPostsLoading({ isLoadingGetPostsList: true }));
    const { data } = yield call([PostApi, PostApi.getPosts], dataRquest);
    yield put(getPostsSuccess({data}));
  } catch (error) {
    yield put(getPostsError({ error: error.error_code }));
  } finally {
    yield put(getPostsLoading({ isLoadingGetPostsList: false }));
  }
}

export function* getPostDetailSaga({payload}) {
  try {
    yield put(getPostDetailLoading({isLoadingGetPostDetail: true}));
    const { data } = yield call([PostApi, PostApi.getPostDetail], payload);
    yield put(getPostDetailSuccess({data}));
  } catch (error) {
    yield put(getPostDetailError({ error: error.error_code }));
  } finally {
    yield put(getPostDetailLoading({isLoadingGetPostDetail: false}));
  }
}

export default function* root() {
  yield all([
    takeLatest(getPosts, getPostsSaga),
    takeLatest(getPostDetail, getPostDetailSaga),
  ]);
}

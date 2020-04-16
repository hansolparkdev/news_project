import { takeEvery, put, call } from 'redux-saga/effects';
import axios from 'axios';
import {
  FETCH_NEWS_DATA_REQUEST, FETCH_NEWS_DATA_REQUEST_STARTED,
  FETCH_NEWS_DATA_SUCCESS, FETCH_NEWS_DATA_FAIL,
} from '../reducers/newsReducer';
import newsDataUrl from '../../lib/api';

export const fetchNewsData = function* fetchNewsData(action) {
  try {
    yield put({ type: FETCH_NEWS_DATA_REQUEST_STARTED });
    const {
      currentPage, searchValue,
      from, to,
    } = action;
    const q = searchValue;
    const url = newsDataUrl(q, currentPage, from, to);
    const data = yield call([axios, 'get'], url);
    const result = data.data;
    yield put({ type: FETCH_NEWS_DATA_SUCCESS, result, currentPage });
  } catch (e) {
    yield put({ type: FETCH_NEWS_DATA_FAIL });
  }
};

export const watchNewsData = function* watchNewsData() {
  yield takeEvery(FETCH_NEWS_DATA_REQUEST, fetchNewsData);
};

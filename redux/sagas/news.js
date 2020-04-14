import { takeEvery, put } from 'redux-saga/effects';
import {
  HELLO_REQUEST, HELLO_REQUEST_STARTED,
} from '../reducers/newsReducer';
// import axios from 'axios';

export const hello = function* hello() {
  try {
    const myName = '박한솔';
    console.log(myName);
    yield put({ type: HELLO_REQUEST_STARTED, value: myName });
  } catch (e) {
    yield put();
  }
};

export const watchHello = function* watchHello() {
  yield takeEvery(HELLO_REQUEST, hello);
};

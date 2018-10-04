import { call, put, takeLatest } from 'redux-saga/effects';
import request from 'utils/request';

import { LOAD_STRINGS } from '../App/constants';
import { stringsLoaded, stringLoadingError } from '../App/actions';

export function* getStrings() {
  const requestURL = '/api';
  try {
    const strings = yield call(request, requestURL);
    yield put(stringsLoaded(strings));
  } catch (err) {
    yield put(stringLoadingError(err));
  }
}

export default function* stringData() {
  yield takeLatest(LOAD_STRINGS, getStrings);
}

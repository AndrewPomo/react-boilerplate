import { call, put, takeLatest } from 'redux-saga/effects';
import { LOAD_STRINGS } from 'containers/App/constants';
import { stringsLoaded, stringLoadingError } from 'containers/App/actions';

import request from 'utils/request';

export function* getStrings() {
  const requestURL = '/strings';

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

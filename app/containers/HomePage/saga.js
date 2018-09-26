import { put, select, takeEvery } from 'redux-saga/effects';
import { ADD_STRING, CHANGE_STRING } from 'containers/HomePage/constants';
import request from 'utils/request';
import { makeSelectString } from 'containers/HomePage/selectors';

export function* addString() {
  const string = yield select(makeSelectString());
  const requestURL = `/api`;

  yield request(requestURL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ string }),
  });
  yield put({ type: CHANGE_STRING, string: '' });
}

export default function* newString() {
  yield takeEvery(ADD_STRING, addString);
}

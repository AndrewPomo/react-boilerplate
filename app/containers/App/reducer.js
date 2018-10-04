import { fromJS } from 'immutable';

import {
  LOAD_STRINGS_SUCCESS,
  LOAD_STRINGS,
  LOAD_STRINGS_ERROR,
} from './constants';

export const initialState = fromJS({
  loading: false,
  error: false,
  strings: '',
});

function appReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_STRINGS:
      return state
        .set('loading', true)
        .set('error', false)
        .set('strings', false);
    case LOAD_STRINGS_SUCCESS:
      return state.set('strings', action.strings).set('loading', false);
    case LOAD_STRINGS_ERROR:
      return state.set('error', action.error).set('loading', false);
    default:
      return state;
  }
}

export default appReducer;

import {
  LOAD_STRINGS,
  LOAD_STRINGS_SUCCESS,
  LOAD_STRINGS_ERROR,
} from '../App/constants';

export function loadStrings() {
  return {
    type: LOAD_STRINGS,
  };
}

export function stringsLoaded(strings) {
  return {
    type: LOAD_STRINGS_SUCCESS,
    strings,
  };
}

export function stringLoadingError(error) {
  return {
    type: LOAD_STRINGS_ERROR,
    error,
  };
}

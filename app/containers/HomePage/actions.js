import { CHANGE_STRING, ADD_STRING } from './constants';

export function changeString(string) {
  return {
    type: CHANGE_STRING,
    string,
  };
}

export function addString() {
  return {
    type: ADD_STRING,
  };
}

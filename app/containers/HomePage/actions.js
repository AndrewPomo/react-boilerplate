import { CHANGE_STRING } from './constants';

export function changeString(string) {
  return {
    type: CHANGE_STRING,
    string,
  };
}

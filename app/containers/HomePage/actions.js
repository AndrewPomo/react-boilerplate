/*
 *
 * HomePage actions
 *
 */

import { SUBMIT_STRING } from './constants';

export function submitString(string) {
  return {
    type: SUBMIT_STRING,
    string,
  };
}

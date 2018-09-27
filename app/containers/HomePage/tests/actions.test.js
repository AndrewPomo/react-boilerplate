import { CHANGE_STRING, ADD_STRING } from '../constants';

import { changeString, addString } from '../actions';

describe('Home Actions', () => {
  describe('changeString', () => {
    it('should return the correct type and the passed string', () => {
      const fixture = 'a string';
      const expectedResult = {
        type: CHANGE_STRING,
        string: fixture,
      };

      expect(changeString(fixture)).toEqual(expectedResult);
    });
  });

  describe('addString', () => {
    it('should return the correct type', () => {
      const expectedResult = {
        type: ADD_STRING,
      };

      expect(addString()).toEqual(expectedResult);
    });
  });
});

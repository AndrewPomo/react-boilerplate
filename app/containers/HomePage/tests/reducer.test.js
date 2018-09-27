import { fromJS } from 'immutable';

import homeReducer from '../reducer';
import { changeString } from '../actions';

describe('homeReducer', () => {
  let state;
  beforeEach(() => {
    state = fromJS({
      string: '',
    });
  });

  it('should return the initial state', () => {
    const expectedResult = state;
    expect(homeReducer(undefined, {})).toEqual(expectedResult);
  });

  it('should handle the changeString action correctly', () => {
    const fixture = 'mxstbr';
    const expectedResult = state.set('string', fixture);

    expect(homeReducer(state, changeString(fixture))).toEqual(expectedResult);
  });
});

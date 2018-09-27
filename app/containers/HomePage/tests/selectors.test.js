import { fromJS } from 'immutable';

import { selectHome, makeSelectString } from '../selectors';

describe('selectHome', () => {
  it('should select the home state', () => {
    const homeState = fromJS({
      string: '',
    });
    const mockedState = fromJS({
      string: homeState,
    });
    expect(selectHome(mockedState)).toEqual(homeState);
  });
});

describe('makeSelectString', () => {
  const stringSelector = makeSelectString();
  it('should select the string', () => {
    const string = '';
    const mockedState = fromJS({
      home: {
        string,
      },
    });
    expect(stringSelector(mockedState)).toEqual(string);
  });
});

import { fromJS } from 'immutable';
import { LOAD_STRINGS } from './constants';

export const initialState = fromJS({
  strings: '',
});

function homePageReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_STRINGS:
      return state.set('strings', action.strings);
    default:
      return state;
  }
}

export default homePageReducer;

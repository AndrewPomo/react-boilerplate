import { fromJS } from 'immutable';
import { LOAD_STRINGS_SUCCESS } from './constants';

export const initialState = fromJS({
  strings: [],
});

function collectionReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_STRINGS_SUCCESS:
      return state.set('strings', action.strings);
    default:
      return state;
  }
}

export default collectionReducer;

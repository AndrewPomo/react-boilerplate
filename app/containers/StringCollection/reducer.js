import { fromJS } from 'immutable';
import { LOAD_STRINGS } from './constants';

export const initialState = fromJS({
  strings: '',
});

function collectionReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_STRINGS:
      return state.set('string', action.string);
    default:
      return state;
  }
}

export default collectionReducer;

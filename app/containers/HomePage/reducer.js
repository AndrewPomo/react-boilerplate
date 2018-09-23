import { fromJS } from 'immutable';
import { CHANGE_STRING } from './constants';

export const initialState = fromJS({
  string: '',
});

function homePageReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_STRING:
      return state.set('string', action.string);
    default:
      return state;
  }
}

export default homePageReducer;

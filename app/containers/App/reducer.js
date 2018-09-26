import { fromJS } from 'immutable';

export const initialState = fromJS({
  strings: '',
});

function appReducer(state = initialState) {
  return state;
}

export default appReducer;
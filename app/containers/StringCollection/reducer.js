import { fromJS } from 'immutable';

export const initialState = fromJS({
  strings: [],
});

function collectionReducer(state = initialState) {
  return state;
}

export default collectionReducer;

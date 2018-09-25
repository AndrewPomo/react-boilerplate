import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectCollection = state => state.get('stringCollection', initialState);

const makeSelectStrings = () =>
  createSelector(selectCollection, collectionState =>
    collectionState.get('string'),
  );

export { selectCollection, makeSelectStrings };

import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectGlobal = state => state.get('global');
const selectRoute = state => state.get('route');
const selectCollection = state => state.get('stringCollection', initialState);

const makeSelectLoading = () =>
  createSelector(selectGlobal, globalState => globalState.get('loading'));

const makeSelectError = () =>
  createSelector(selectGlobal, globalState => globalState.get('error'));

const makeSelectStrings = () =>
  createSelector(selectCollection, collectionState =>
    collectionState.get('strings'),
  );

const makeSelectLocation = () =>
  createSelector(selectRoute, routeState => routeState.get('location').toJS());

export {
  selectGlobal,
  makeSelectLoading,
  makeSelectError,
  makeSelectStrings,
  makeSelectLocation,
};

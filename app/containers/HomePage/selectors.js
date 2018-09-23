import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectHome = state => state.get('homePage', initialState);

const makeSelectString = () =>
  createSelector(selectHome, homeState => homeState.get('string'));

export { selectHome, makeSelectString };

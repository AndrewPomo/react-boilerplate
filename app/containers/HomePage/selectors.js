import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the homepage state domain
 */

const selectHomePageDomain = state => state.get('homepage', initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by HomePage
 */

const makeSelectHomePage = () =>
  createSelector(selectHomePageDomain, substate => substate.toJS());

export default makeSelectHomePage;
export { selectHomePageDomain };

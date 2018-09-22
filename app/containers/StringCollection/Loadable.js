/**
 *
 * Asynchronously loads the component for StringCollection
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});

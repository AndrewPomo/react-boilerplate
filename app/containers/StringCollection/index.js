import React from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import injectReducer from 'utils/injectReducer';
// import injectSaga from 'utils/injectSaga';
import { makeSelectStrings } from './selectors';
import reducer from './reducer';
import { loadStrings } from '../App/actions';

/* eslint-disable react/prefer-stateless-function */
export class StringCollection extends React.PureComponent {
  render() {
    return (
      <div>
        <h1>Behold, the string collection!</h1>
        {/* put a table here */}
        <a href="/" className="button">
          Return to homepage
        </a>
      </div>
    );
  }
}

StringCollection.propTypes = {
  // handleSubmit: PropTypes.func,
};

export function mapDispatchToProps(dispatch) {
  return {
    handleSubmit: evt => {
      if (evt !== undefined && evt.preventDefault) evt.preventDefault();
      dispatch(loadStrings());
    },
  };
}

const mapStateToProps = createStructuredSelector({
  repos: makeSelectStrings(),
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'stringCollection', reducer });
// const withSaga = injectSaga({ key: 'stringCollection', saga });

export default compose(
  // withSaga,
  withConnect,
  withReducer,
)(StringCollection);

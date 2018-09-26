import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';

import { changeString, addString } from './actions';
import { makeSelectString } from './selectors';
import reducer from './reducer';
import saga from './saga';

/* eslint-disable react/prefer-stateless-function */
export class HomePage extends React.PureComponent {
  render() {
    return (
      <div>
        <h1>Welcome to string collector!</h1>
        <h2>Input a string below to add it to the collection</h2>
        <form onSubmit={this.props.handleSubmit}>
          <label htmlFor="string">
            <input
              id="string"
              placeholder="Enter string here"
              onChange={this.props.handleChange}
            />
            <br />
            <input type="submit" />
          </label>
        </form>
        <a href="/collection" className="button">
          View String Collection
        </a>
      </div>
    );
  }
}

HomePage.propTypes = {
  handleSubmit: PropTypes.func,
  handleChange: PropTypes.func,
};

export function mapDispatchToProps(dispatch) {
  return {
    handleChange: evt => dispatch(changeString(evt.target.value)),
    handleSubmit: evt => {
      if (evt !== undefined && evt.preventDefault) evt.preventDefault();
      dispatch(addString());
    },
  };
}

const mapStateToProps = createStructuredSelector({
  string: makeSelectString(),
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'homePage', reducer });
const withSaga = injectSaga({ key: 'homePage', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(HomePage);

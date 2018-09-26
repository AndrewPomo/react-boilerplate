import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import { makeSelectStrings } from './selectors';
import reducer from './reducer';
import { loadStrings } from './actions';
import saga from './saga';
import StringList from '../../components/StringList';
import Header from '../../components/Header';
import NavLink from '../../components/NavLink';

/* eslint-disable react/prefer-stateless-function */
export class StringCollection extends React.PureComponent {
  componentDidMount() {
    this.props.handleLoad();
  }

  render() {
    return (
      <div>
        <Header>Behold, the string collection!</Header>
        <NavLink href="/" className="button">
          Return to homepage
        </NavLink>
        <StringList strings={this.props.strings} />
      </div>
    );
  }
}

StringCollection.propTypes = {
  strings: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  handleLoad: PropTypes.func,
};

export function mapDispatchToProps(dispatch) {
  return {
    handleLoad: () => {
      dispatch(loadStrings());
    },
  };
}

const mapStateToProps = createStructuredSelector({
  strings: makeSelectStrings(),
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'stringCollection', reducer });
const withSaga = injectSaga({ key: 'stringCollection', saga });

export default compose(
  withSaga,
  withConnect,
  withReducer,
)(StringCollection);

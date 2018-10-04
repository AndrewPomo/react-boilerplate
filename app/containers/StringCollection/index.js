import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import {
  makeSelectStrings,
  makeSelectLoading,
  makeSelectError,
} from '../App/selectors';
import reducer from './reducer';
import { loadStrings } from '../App/actions';
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
    const { loading, error, strings } = this.props;
    const stringListProps = {
      loading,
      error,
      strings,
    };

    return (
      <div>
        <Header>Behold, the string collection!</Header>
        <NavLink href="/" className="button">
          Return to homepage
        </NavLink>
        <StringList {...stringListProps} />
      </div>
    );
  }
}

StringCollection.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
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
  loading: makeSelectLoading(),
  error: makeSelectError(),
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

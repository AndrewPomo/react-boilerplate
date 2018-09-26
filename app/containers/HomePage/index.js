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
import Header from '../../components/Header';
import SubHead from '../../components/SubHead';
import NavLink from '../../components/NavLink';
import SubmitForm from '../../components/SubmitForm';
import SubmitButton from '../../components/SubmitButton';
import Input from '../../components/Input';

/* eslint-disable react/prefer-stateless-function */
export class HomePage extends React.PureComponent {
  render() {
    const enabled = this.props.string.length > 0;
    return (
      <div>
        <Header>Welcome to string collector!</Header>
        <SubHead>Input a string below to add it to the collection</SubHead>
        <SubmitForm onSubmit={this.props.handleSubmit}>
          <Input
            id="string"
            placeholder="Enter string here"
            type="text"
            minlength="1"
            onChange={this.props.handleChange}
            value={this.props.string}
          />
          <br />
          <SubmitButton
            disabled={!enabled}
            type="submit"
            value="Submit String"
          />
        </SubmitForm>
        <NavLink href="/collection" className="button">
          View String Collection
        </NavLink>
      </div>
    );
  }
}

HomePage.propTypes = {
  handleSubmit: PropTypes.func,
  handleChange: PropTypes.func,
  string: PropTypes.string,
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

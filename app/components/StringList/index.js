import React from 'react';
import PropTypes from 'prop-types';

import List from 'components/List';
import ListItem from 'components/ListItem';
import SubHead from 'components/SubHead';

/* eslint-disable no-underscore-dangle */
function StringList({ loading, error, strings }) {
  if (loading) {
    return <SubHead>Loading strings...</SubHead>;
  }

  if (error !== false) {
    return <SubHead>Something went wrong.</SubHead>;
  }

  if (strings.length) {
    return (
      <List>
        {strings.map(string => (
          <ListItem key={string._id}>{string.text}</ListItem>
        ))}
      </List>
    );
  }

  return null;
}

StringList.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.any,
  strings: PropTypes.any,
};

export default StringList;

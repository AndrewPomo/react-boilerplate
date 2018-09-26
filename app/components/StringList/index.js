import React from 'react';
import PropTypes from 'prop-types';

import List from 'components/List';
import ListItem from 'components/ListItem';
import SubHead from 'components/SubHead';

/* eslint-disable no-underscore-dangle */
function StringList({ strings }) {
  if (strings.length) {
    return (
      <List>
        {strings.map(string => (
          <ListItem key={string._id}>{string.text}</ListItem>
        ))}
      </List>
    );
  }

  return <SubHead>There are no strings in the collection. Go add one!</SubHead>;
}

StringList.propTypes = {
  strings: PropTypes.any,
};

export default StringList;

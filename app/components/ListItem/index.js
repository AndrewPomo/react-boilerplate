import styled from 'styled-components';

const ListItem = styled.li`
  margin-top: -1px;
  border: 1px solid black;
  padding: 10px;
  min-height: 44px;
  &:nth-child(odd) {
    background-color: lightgrey;
  }
`;

export default ListItem;

import styled from 'styled-components';

const Input = styled.input`
  padding: 10px;
  border: 1px solid black;
  border-radius: 5px;
  color: #333;
  transition: all 0.3s ease-out;
  &:focus {
    outline: none;
    border-color: #3dd28d;
  }
`;

export default Input;

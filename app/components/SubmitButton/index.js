import styled from 'styled-components';

const SubmitButton = styled.input`
  margin-top: 20px;
  padding: 12px;
  cursor: pointer;
  text-align: center;
  font-size: 13px;
  border-radius: 5px;
  background-color: #3dd28d;
  color: white;
  transition: all 150ms linear;
  &:focus {
    outline: 1px dotted #959595;
    outline-offset: -4px;
  }
  &:disabled {
    background-color: grey;
  }
  &:hover {
    transition: all 150ms linear;
    opacity: 0.85;
  }
  &:active {
    transition: all 150ms linear;
    opacity: 0.75;
  }
`;

export default SubmitButton;

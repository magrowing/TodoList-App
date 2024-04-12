import styled from 'styled-components';

const ComboBox = styled.select`
  display: inline-block;
  min-width: 15rem;
  height: 4rem;
  border: none;
  border-radius: 0.6rem;
  font-weight: 500;
  font-size: 1.6rem;
  text-indent: 1.6rem;
  text-decoration: none;
  cursor: pointer;
  overflow: hidden;
  background-color: ${(props) => props.theme.colors.bgThird};
  color: ${(props) => props.theme.colors.textPrimary};
  -webkit-appearance: none;
`;

export default ComboBox;

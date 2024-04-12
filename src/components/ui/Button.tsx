import styled from 'styled-components';

type ButtonProps = {
  type?: 'button' | 'submit' | 'reset';
  className?: string;
};

const Button = styled.button.attrs<ButtonProps>((props) => {
  return { type: props.type ?? 'button' };
})`
  display: inline-block;
  min-width: 10rem;
  height: 4rem;
  border: none;
  border-radius: 0.6rem;
  font-weight: 500;
  font-size: 1.6rem;
  text-decoration: none;
  cursor: pointer;
  overflow: hidden;
  background-color: ${(props) => props.theme.colors.bgThird};
  color: ${(props) => props.theme.colors.textSecondary};

  &.primary {
    background-color: ${(props) => props.theme.colors.primary};
    color: ${(props) => props.theme.colors.baseWhite};
  }
`;

export default Button;

export const IconButton = styled(Button)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 4rem;
  width: 4rem;
  height: 4rem;
  margin-left: 1rem;
  background-color: ${(props) => props.theme.colors.grayPrimary};
  svg {
    width: 2rem;
    height: 2rem;
    stroke: ${(props) => props.theme.colors.textPrimary};
  }
`;

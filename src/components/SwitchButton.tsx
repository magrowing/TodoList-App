import { useState } from 'react';

import styled, { css } from 'styled-components';

import { FiSun, FiMoon } from 'react-icons/fi';

type SwitchProps = {
  toggle: boolean;
};

const Switch = styled.button<SwitchProps>`
  position: absolute;
  top: 50%;
  right: 0;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 9rem;
  height: auto;
  padding: 0.6rem 1rem;
  border: none;
  border-radius: 3rem;
  font-weight: 500;
  font-size: 1.6rem;
  text-decoration: none;
  text-align: left;
  cursor: pointer;
  overflow: hidden;
  background-color: ${(props) => props.theme.colors.primary};

  span {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 3rem;
    height: 3rem;
    background-color: ${(props) => props.theme.colors.baseWhite};
    border-radius: 100%;
    transition: opacity;

    &:first-of-type {
      opacity: 0;
    }
    &:last-of-type {
      opacity: 1;
    }

    svg {
      width: 2rem;
      height: 2rem;
      stroke: ${(props) => props.theme.colors.primary};
    }
  }

  ${(props) =>
    props.toggle &&
    css`
      span {
        &:first-of-type {
          opacity: 1;
        }
        &:last-of-type {
          opacity: 0;
        }
      }
    `}
`;

function SwitchButton() {
  const [toggle, seToggle] = useState(true);

  const handleSwitchClick = () => {
    seToggle(!toggle);
  };
  return (
    <Switch type="button" toggle={toggle} onClick={handleSwitchClick}>
      <span>
        <FiSun />
      </span>
      <span>
        <FiMoon />
      </span>
    </Switch>
  );
}

export default SwitchButton;

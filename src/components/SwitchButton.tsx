import { useContext } from 'react';

import styled, { css } from 'styled-components';

import { ThemeContext } from '../context/ThemeProvider';

import { FiSun, FiMoon } from 'react-icons/fi';

type SwitchProps = {
  active: string;
};

const Switch = styled.button<SwitchProps>`
  position: absolute;
  top: 50%;
  right: 0;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 7rem;
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
    width: 2.6rem;
    height: 2.6rem;
    background-color: ${(props) => props.theme.colors.baseWhite};
    border-radius: 100%;
    transition: opacity;
    font-size: 0;
    text-indent: -99999px;

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
    props.active === 'light' &&
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

  @media screen and (max-width: 480px) {
    position: fixed;
    top: unset;
    right: 2rem;
    bottom: 2rem;
    width: 6rem;
    height: 6rem;
    transform: translateY(0%);
    z-index: 10;

    span {
      width: 4rem;
      height: 4rem;
      &:first-of-type {
        display: none;
      }
      &:last-of-type {
        display: inline-flex;
      }
    }

    ${(props) =>
      props.active === 'light' &&
      css`
        span {
          &:first-of-type {
            display: inline-flex;
          }
          &:last-of-type {
            display: none;
          }
        }
      `}
  }
`;

function SwitchButton() {
  const { theme, onChangeTheme } = useContext(ThemeContext);
  return (
    <Switch type="button" active={theme} onClick={onChangeTheme}>
      <span>
        <FiSun /> Light Mode
      </span>
      <span>
        <FiMoon /> Dark Mode
      </span>
    </Switch>
  );
}

export default SwitchButton;

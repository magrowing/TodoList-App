import styled from 'styled-components';

import SwitchButton from './SwitchButton';

const HeaderContainer = styled.header`
  position: relative;
  h2 {
    display: inline-block;
    width: 100%;
    font-size: 4rem;
    font-weight: 700;
    text-transform: uppercase;
    text-align: center;
    margin: 3rem auto;
    color: ${(props) => props.theme.colors.textPrimary};

    @media screen and (max-width: 480px) {
      font-size: 3.2rem;
      margin: 2rem auto 3rem;
    }
  }
`;

function Header() {
  return (
    <HeaderContainer>
      <h2>Todolist</h2>
      <SwitchButton />
    </HeaderContainer>
  );
}

export default Header;

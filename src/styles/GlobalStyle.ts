/* eslint-disable @typescript-eslint/no-unused-vars */
import { createGlobalStyle } from 'styled-components';


const GlobalStyle = createGlobalStyle`
  
  html {
    box-sizing: border-box;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  html {
    font-size: 62.5%; 
  }

  body {
    min-width: 32rem;
    font-size: 1.6rem;
    font-family: "Pretendard Variable", Pretendard,  sans-serif;
    color: ${(props) => props.theme.colors.baseBlack};
    background-color: ${(props) => props.theme.colors.bgPrimary};
  }

  :lang(ko) {
    h1, h2, h3 {
      word-break: keep-all;
    }
  }

  a {
    text-decoration: none;
  }
`;

export default GlobalStyle
import { ThemeProvider } from 'styled-components';

import { Reset } from 'styled-reset';

import GlobalStyle from './styles/GlobalStyle';
import defaultTheme from './styles/defaultTheme';

import Layout from './components/Layout';

function App() {
  const theme = defaultTheme;
  return (
    <ThemeProvider theme={theme}>
      <Reset />
      <GlobalStyle />
      <Layout />
    </ThemeProvider>
  );
}

export default App;

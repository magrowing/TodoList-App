import { Reset } from 'styled-reset';

import GlobalStyle from './styles/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import defaultTheme from './styles/defaultTheme';

function App() {
  const theme = defaultTheme;
  return (
    <ThemeProvider theme={theme}>
      <Reset />
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;

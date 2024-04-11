import { Reset } from 'styled-reset';

import GlobalStyle from './styles/GlobalStyle';

import Layout from './components/Layout';

import ThemeProvider from './context/ThemeProvider';

function App() {
  return (
    <ThemeProvider>
      <Reset />
      <GlobalStyle />
      <Layout />
    </ThemeProvider>
  );
}

export default App;

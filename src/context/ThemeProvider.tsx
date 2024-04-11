import React, { ReactNode } from 'react';

import { ThemeProvider as StyledThemeProvider } from 'styled-components';

import useTheme from '../hooks/useTheme';

import defaultTheme from '../styles/defaultTheme';
import darkTheme from '../styles/darkTheme';

type ThemeProviderProps = {
  children: ReactNode;
};

const defaultValue = {
  theme: 'light',
  onChangeTheme: () => {},
};

export const ThemeContext = React.createContext(defaultValue);

function ThemeProvider({ children }: ThemeProviderProps) {
  const themeProps = useTheme();
  return (
    <ThemeContext.Provider value={themeProps}>
      <StyledThemeProvider
        theme={themeProps.theme === 'light' ? defaultTheme : darkTheme}
      >
        {children}
      </StyledThemeProvider>
    </ThemeContext.Provider>
  );
}

export default ThemeProvider;

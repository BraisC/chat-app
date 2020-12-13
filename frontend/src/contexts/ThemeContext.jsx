import React from 'react';
import { darkTheme } from 'styles/theme';
import { useThemeSwitch } from 'hooks/useThemeSwitch';

export const ThemeContext = React.createContext({
  theme: darkTheme,
  themeToggler: () => {},
});

export const MyThemeProvider = ({ children }) => {
  const [theme, themeToggler] = useThemeSwitch();

  return <ThemeContext.Provider value={{ theme, themeToggler }}>{children}</ThemeContext.Provider>;
};

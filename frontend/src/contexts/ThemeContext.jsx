import React from 'react';
import { useThemeSwitch } from 'hooks/useThemeSwitch';

export const ThemeContext = React.createContext({
  theme: 'dark',
  themeToggler: () => {},
});

export const MyThemeProvider = ({ children }) => {
  const [theme, themeToggler] = useThemeSwitch();

  return <ThemeContext.Provider value={{ theme, themeToggler }}>{children}</ThemeContext.Provider>;
};

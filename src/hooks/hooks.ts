import { createContext, useContext } from 'react';

export const supportedThemes = {
  light: 'light',
  dark: 'dark',
};

export type Themes = keyof typeof supportedThemes;

export const ThemeContext = createContext<
  | {
      theme: Themes;
      setTheme: (theme: Themes) => void;
      supportedThemes: { [key: string]: string };
    }
  | undefined
>(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error('You can use "useTheme" hook only within a <ThemeProvider> component.');
  }

  return context;
};

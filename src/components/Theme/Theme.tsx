import React, { useEffect, useState } from 'react';

import { supportedThemes, ThemeContext, Themes } from '../../hooks/hooks';

const StorageKey = 'features-color-theme';

const getTheme = (): Themes => {
  let theme = localStorage.getItem(StorageKey);

  if (!theme) {
    localStorage.setItem(StorageKey, 'light');
    theme = 'light';
  }

  return theme as Themes;
};

const Theme = (props: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState<Themes>(getTheme);

  useEffect(() => {
    localStorage.setItem(StorageKey, theme);
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <ThemeContext.Provider
      value={{
        theme,
        setTheme,
        supportedThemes,
      }}
    >
      {props.children}
    </ThemeContext.Provider>
  );
};

export default Theme;

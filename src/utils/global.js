import {createContext, useContext, useState} from 'react';
import lightTheme from './lightTheme';
import darkTheme from './darkTheme';

const ThemeContext = createContext({
  theme: darkTheme,
  setTheme: () => {},
  toggleTheme: () => {},
});

export const ThemeProvider = ({children}) => {
  const [theme, setTheme] = useState(darkTheme);

  const toggleTheme = () => {
    setTheme(theme === lightTheme ? darkTheme : lightTheme);
  };

  return (
    <ThemeContext.Provider value={{theme, setTheme, toggleTheme}}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);

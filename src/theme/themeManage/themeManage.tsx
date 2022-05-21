import {View, Text} from 'react-native';
import React, {createContext} from 'react';
import useThemeMode from '../themeHook/useThemeMode';
import * as colors from '../../constants/colors';

interface Iprops {
  children?: React.ReactNode;
}

interface IContextTheme {
  theme: string;
  themeToggler: () => void;
}

export const ThemeContext = createContext({} as IContextTheme); 


const ThemeProvider: React.FC<Iprops> = ({children}: Iprops) => {
  const {theme, themeToggler} = useThemeMode();

  const value = {
    theme,
    themeToggler,
  };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

export default ThemeProvider;

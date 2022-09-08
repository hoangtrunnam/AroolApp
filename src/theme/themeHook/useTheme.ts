import {View, Text} from 'react-native';
import React, {useContext} from 'react';
import {ThemeContext} from '../../theme/themeManage/themeManage';
import {DARK_THEME, LIGHT_THEME} from '../../constants';
/**
 * custom hooks get theme 
 * @param null
 * @returns theme
 */
const useTheme = () => {
  const context = useContext(ThemeContext);
  const theme = context.theme === 'dark' ? DARK_THEME : LIGHT_THEME;
  return {theme};
};

export default useTheme;


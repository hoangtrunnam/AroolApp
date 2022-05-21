// windows == localStorage
import AsyncStorage from '@react-native-async-storage/async-storage';

import {useEffect, useState} from 'react';

const useThemeMode = () => {
  const [theme, setTheme] = useState('dark');

  const setMode = async (mode: string) => {
    try {
      await AsyncStorage.setItem('theme', mode);
      setTheme(mode);
    } catch (error) {
      console.log(error);
    }
  };

  const themeToggler = () =>{
    theme === 'dark' ? setMode('light') : setMode('dark');
  }

  const getTheme = async () => {
    try {
      const localTheme = await AsyncStorage.getItem('theme');
      localTheme && setTheme(localTheme);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getTheme();
  },[]);

  return {theme, themeToggler};
};

export default useThemeMode;

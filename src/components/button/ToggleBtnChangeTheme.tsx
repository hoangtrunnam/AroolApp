import {StyleSheet, Switch, Text, TouchableOpacity, View} from 'react-native';
import React, {useEffect, useState, useContext} from 'react';
import useThemeMode from '../../theme/themeHook/useThemeMode';
import {ThemeContext} from '../../theme/themeManage/themeManage';
import {COLORS, DARK_THEME, LIGHT_THEME} from '../../constants/colors';
import useTheme from '../../theme/themeHook/useTheme';

const ToggleBtnChangeTheme: React.FC = () => {
  // const context = useContext(ThemeContext);
  const {theme} = useTheme();
  const context = useContext(ThemeContext);

  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  console.log('asdfsf', context);
  // console.log({theme});

  useEffect(() => {
    if(context.theme === 'dark'){
      setIsEnabled(true)
    }
  },[])

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: theme.PRIMARY_BACKGROUND_COLOR,
        },
      ]}>
      {/* <Switch
        trackColor={{false: '#767577', true: '#81b0ff'}}
        thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      /> */}

      <TouchableOpacity
        style={{height: 50, width: 50, backgroundColor: '#5466'}}
        onPress={() => context.themeToggler()}>
        <Text>btn</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ToggleBtnChangeTheme;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 100,
    backgroundColor: '#',
  },
  txt: {
    fontSize: 24,
    // color: !checkDarkMode? DARK_THEME.PRIMARY_TEXT_COLOR:LIGHT_THEME.PRIMARY_TEXT_COLOR
  },
});

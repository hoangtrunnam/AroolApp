import React from 'react';
import {
  StyleProp,
  StyleSheet,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';

interface IProps {
  onPress?: () => void;
  containerStyle?: StyleProp<ViewStyle>;
  children?: React.ReactNode;
}

const Row: React.FC<IProps> = React.memo(({...props}: IProps): any => {
  const {onPress, containerStyle, children} = props;

  if (!onPress) {
    return <View style={[style.container, containerStyle]}>{children}</View>;
  }
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={[style.container, containerStyle]}
      onPress={onPress || null}>
      {children}
    </TouchableOpacity>
  );
});

export default Row;

const style = StyleSheet.create({
  container: {flexDirection: 'row', alignItems: 'center'},
});

import {
  Image,
  ImageStyle,
  StyleProp,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import React from 'react';
import { COLORS } from '../../constants';

interface IProps {
  onPress: () => void;
  icSource: any;
  containerStyle?: StyleProp<ViewStyle>;
  iconStyle?: StyleProp<ImageStyle>;
  txtTitle?: string;
}
/**
 * onPress is required.
 * icSource is required.
 * chỉ dùng để chứa icon, txtTitle có thể bỏ qua
 * @param interface 
 * @returns void
 */
const ButtonIcon: React.FC<IProps> = ({...props}: IProps) => {
  const {onPress, icSource, containerStyle, iconStyle, txtTitle} = props;

  return (
    <TouchableOpacity
      style={[styles.btnContainer, containerStyle]}
      onPress={onPress}>
      <Image source={icSource} style={[styles.icStyle, iconStyle]} />
      <Text style={[styles.txtTitle]}>{txtTitle}</Text>
    </TouchableOpacity>
  );
};

export default ButtonIcon;
const styles = StyleSheet.create({

  btnContainer: {
    height: 120,
    width: 100,
    alignItems: 'center',
    // backgroundColor: 'red',
  },
  icStyle: {
    height: 56,
    width: 56,
    borderRadius: 24,
  },
  txtContainer: {
    height: '50%',
    width: '80%',
  },
  txtTitle: {
    fontSize: 14,
    fontWeight: '500',
    color:COLORS.grayscale,
    marginTop: 6,
    textAlign: 'center',
  },
});

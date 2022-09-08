import {
  Text,
  TouchableOpacity,
  StyleSheet,
  TextStyle,
  StyleProp,
  ViewStyle,
  ImageStyle,
  Image,
} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { COLORS } from '../../constants';

interface IProps {
  onPress: () => void;
  title: string;
  icSource?: any;
  containerStyle?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  iconStyle?: StyleProp<ImageStyle>;
  colorGradient?: string[];
}
/**
 * onPress is required
 * title is required
 * @param interface 
 * @returns void
 */
const Button: React.FC<IProps> = ({...Iprops}: IProps) => {
  const {
    onPress,
    title,
    icSource,
    containerStyle,
    textStyle,
    iconStyle,
    colorGradient,
  } = Iprops;

  const renderText = () => {
    if (title && !icSource) {
      return <Text style={[styles.txtTitle, textStyle]}>{title}</Text>;
    }
    return (
      <>
        <Image source={icSource} style={[styles.icStyle, iconStyle]} />
        <Text style={[styles.txtTitle, textStyle]}>{title}</Text>
      </>
    );
  };

  return (
    <TouchableOpacity
      style={[styles.btnContainer, containerStyle]}
      onPress={onPress}>
      <LinearGradient
        colors={colorGradient || [COLORS.primary, COLORS.primary_01]}
        style={styles.linearGradient}>
        {renderText()}
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  btnContainer: {
    height: 60,
    width: 160,
    // backgroundColor:'red'
  },
  linearGradient: {
    height: '100%',
    width: '100%',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderRadius: 54,
    flexDirection: 'row',
    // marginTop: 50,
    paddingHorizontal: 10,
  },
  txtTitle: {
    fontSize: 16,
    fontWeight: '600',
  },
  icStyle: {
    height: 30,
    width: 30,
  },
});

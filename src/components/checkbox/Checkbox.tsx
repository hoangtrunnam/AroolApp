import {
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';
import React from 'react';
import Svgs from '../../constants/Svgs';
import {COLORS} from '../../constants/colors';

interface CheckboxProps {
  checked?: boolean;
  disabled?: boolean;
  onPress?: () => void;
  color?: string;
  style?: StyleProp<ViewStyle>;
  text?: string;
  textStyle?: StyleProp<TextStyle>;
  type: 'radio' | 'square' | 'toggle';
  width?: number;
  height?: number;
}

const Checkbox = ({
  checked = false,
  disabled = false,
  onPress = () => null,
  color,
  style,
  text,
  textStyle,
  type,
  width = 20,
  height = 20,
}: CheckboxProps) => {
  // Check type checkbox
  const getTypeCheckbox = () => {
    if (type === 'square') {
      return squareCheckbox();
    }
    if (type === 'radio') {
      return radioCheckbox();
    }
    if (type === 'toggle') {
      return toggleCheckbox();
    }
  };

  // Square checkbox
  const squareCheckbox = () => {
    if (checked && !disabled) {
      return (
        <Svgs.CheckboxSelected
          onPress={onPress}
          width={width}
          height={height}
          disabled={disabled}
        />
      );
    }
    if (!checked && !disabled) {
      return (
        <Svgs.CheckboxUnselected
          onPress={onPress}
          width={width}
          height={height}
          disabled={disabled}
        />
      );
    }
    if (checked && disabled) {
      return (
        <Svgs.CheckboxDisabled
          onPress={onPress}
          width={width}
          height={height}
          disabled={disabled}
        />
      );
    }
    if (!checked && disabled) {
      return (
        <Svgs.CheckboxUnselectedDisabled
          onPress={onPress}
          width={width}
          height={height}
          disabled={disabled}
        />
      );
    }
  };

  // Radio checkbox
  const radioCheckbox = () => {
    if (checked && !disabled) {
      return (
        <Svgs.RadioSelected
          onPress={onPress}
          width={width}
          height={height}
          disabled={disabled}
        />
      );
    }
    if (!checked && !disabled) {
      return (
        <Svgs.RadioUnselected
          onPress={onPress}
          width={width}
          height={height}
          disabled={disabled}
        />
      );
    }
    if (checked && disabled) {
      return (
        <Svgs.RadioSelectedDisabled
          onPress={onPress}
          width={width}
          height={height}
          disabled={disabled}
        />
      );
    }
    if (!checked && disabled) {
      return (
        <Svgs.RadioUnselectedDisabled
          onPress={onPress}
          width={width}
          height={height}
          disabled={disabled}
        />
      );
    }
  };

  //Toggle checkbox
  const toggleCheckbox = () => {
    if (checked && !disabled) {
      return (
        <Svgs.ToggleOn
          onPress={onPress}
          width={width}
          height={height}
          disabled={disabled}
        />
      );
    }
    if (!checked && !disabled) {
      return (
        <Svgs.ToggleOff
          onPress={onPress}
          width={width}
          height={height}
          disabled={disabled}
        />
      );
    }
    if (checked && disabled) {
      return (
        <Svgs.ToggleOnDisabled
          onPress={onPress}
          width={width}
          height={height}
          disabled={disabled}
        />
      );
    }
    if (!checked && disabled) {
      return (
        <Svgs.ToggleOffDisabled
          onPress={onPress}
          width={width}
          height={height}
          disabled={disabled}
        />
      );
    }
  };
  return (
    <TouchableOpacity
      disabled={disabled}
      style={[style, styles.container]}
      onPressIn={onPress}>
      {getTypeCheckbox()}
      {text && (
        <Text style={[styles.textStyle, textStyle, disabled && styles.disable]}>
          {text}
        </Text>
      )}
    </TouchableOpacity>
  );
};

export default Checkbox;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingVertical: 6,
    alignItems: 'center',
  },
  textStyle: {
    marginLeft: 12,
    color: COLORS.grayscale,
    flex: 1,
  },
  disable: {
    opacity: 0.5,
  },
});

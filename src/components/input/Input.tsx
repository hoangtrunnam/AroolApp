import {Text, TextInput, TextInputProps, View, ViewStyle} from 'react-native';
import React, {useState} from 'react';
import {COLORS} from '../../constants/colors';
import styles from './styles';

export interface InputProps extends TextInputProps {
  iconPosition?: 'left' | 'right';
  icon?: React.ReactElement;
  error?: string;
  required?: boolean;
  style?: ViewStyle;
  disabled?: boolean;
  label?: string;
  noneInput?: boolean;
}

const Input = ({
  onChangeText,
  iconPosition = 'left',
  icon,
  style,
  value,
  label,
  error,
  required,
  disabled,
  noneInput = false,
  ...props
}: InputProps) => {
  const [focused, setFocused] = useState<boolean>(false);

  const getFlexDirection = () => {
    if (icon && iconPosition) {
      if (iconPosition === 'left') {
        return 'row';
      } else if (iconPosition === 'right') {
        return 'row-reverse';
      }
    }
  };

  const getBorderColor = () => {
    if (error) {
      return COLORS.red_02;
    }

    if (focused) {
      return COLORS.primary_02;
    } else {
      return COLORS.grayscale_05;
    }
  };

  const getAlignIcon = () => {
    if (icon) {
      return 'center';
    } else {
      return 'baseline';
    }
  };

  const getPlacehoderTextColor = () => {
    if (disabled) {
      return COLORS.grayscale_04;
    } else {
      return COLORS.grayscale_03;
    }
  };

  const getPaddingIconByPosition = () => {
    if (icon && iconPosition) {
      if (iconPosition === 'left') {
        return {paddingRight: 14};
      } else if (iconPosition === 'right') {
        return {paddingLeft: 14};
      }
    }
  };

  const getOpacity = () => {
    if (disabled) {
      return 0.5;
    }
  };

  const getBorderWidth = () => {
    if (focused || error) {
      return 2;
    } else {
      return 1;
    }
  };

  return (
    <View style={style}>
      {label && (
        <View style={styles.label}>
          <Text style={styles.textLabel}>{label}</Text>
          {required && <Text style={styles.required}>*</Text>}
        </View>
      )}
      <View
        style={[
          styles.inputContainer,
          {alignItems: getAlignIcon()},
          {borderColor: getBorderColor(), flexDirection: getFlexDirection()},
          {opacity: getOpacity()},
          {borderWidth: getBorderWidth()},
        ]}>
        <View style={[getPaddingIconByPosition()]}>{icon && icon}</View>
        {!noneInput ? (
          <TextInput
            style={[styles.input, icon && styles.flex_1]}
            onChangeText={onChangeText}
            value={value}
            onFocus={() => {
              setFocused(true);
            }}
            onBlur={() => {
              setFocused(false);
            }}
            placeholderTextColor={getPlacehoderTextColor()}
            editable={!disabled}
            {...props}
          />
        ) : (
          <View style={[styles.input, icon && styles.flex_1]}>
            <Text>{value}</Text>
          </View>
        )}
      </View>
      {error && (
        <View style={styles.error}>
          <Text style={styles.textError}>{'error'}</Text>
        </View>
      )}
    </View>
  );
};

export default Input;

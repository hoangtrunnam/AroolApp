import {COLORS} from '../../constants/colors';
import {Platform, StyleSheet} from 'react-native';

export default StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    borderRadius: 12,
    backgroundColor: '#fff',
    paddingVertical: 4,
    paddingHorizontal: 16,
    alignSelf: 'stretch',
    borderColor: '#fff',
    width: '100%',
    shadowColor: '#000000',
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
    zIndex: Platform.OS === 'ios' ? 1 : 0,
  },
  label: {
    flexDirection: 'row',
    marginBottom: 8,
  },
  textLabel: {
    fontSize: 14,
    color: COLORS.grayscale,
  },
  required: {
    fontSize: 14,
    color: COLORS.red_02,
    marginLeft: 4,
  },
  error: {
    marginTop: 8,
  },
  textError: {
    fontSize: 12,
    color: COLORS.red_02,
  },
  input: {
    fontSize: 14,
    color: COLORS.grayscale_01,
    paddingVertical: 10,
    width: '100%',
  },
  flex_1: {
    flex: 1,
  },
});

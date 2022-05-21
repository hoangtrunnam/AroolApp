import {
  StyleProp,
  StyleSheet,
  Text,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';
import React from 'react';

interface Iprops {
  onPress: () => void;
  containerStyle?: StyleProp<ViewStyle>;
}
/**
 * onPress is required
 * @param interface 
 * @returns void
 */
const BtnAddMedia: React.FC<Iprops> = ({...props}: Iprops) => {
  const {onPress, containerStyle} = props;
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.container, containerStyle]}>
      <Text style={styles.txtTitle}>+ Add media</Text>
    </TouchableOpacity>
  );
};

export default BtnAddMedia;

const styles = StyleSheet.create({
  container: {
      width:121,
      height:48,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius:12,
      borderColor:'#4975FF',
      borderWidth:1,
      borderStyle:'dashed',
      backgroundColor:'#4F56FF1F'
  },
  txtTitle:{
      color:'#3863FF',
      fontSize:16,
      fontWeight: '600',
  },
});

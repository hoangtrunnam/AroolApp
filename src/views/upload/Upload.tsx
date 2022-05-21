import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {StackParamList} from '../../navigation';

type Props = NativeStackScreenProps<StackParamList, 'Upload'>;

const Upload = ({navigation}: Props) => {
  return (
    <View style={styles.container}>
      <Text>Upload</Text>
    </View>
  );
};

export default Upload;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

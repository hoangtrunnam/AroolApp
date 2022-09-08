import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {StackParamList} from '../../navigation';

type Props = NativeStackScreenProps<StackParamList, 'Notification'>;

const Notifcation = ({navigation}: Props) => {
  return (
    <View style={styles.container}>
      <Text>Notifcation</Text>
    </View>
  );
};

export default Notifcation;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

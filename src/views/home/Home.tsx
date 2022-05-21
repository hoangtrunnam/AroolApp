import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {ScreenNames} from '../../navigation/ScreenNames';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {StackParamList} from '../../navigation';
import Checkbox from '../../components/checkbox/Checkbox';
import SingleChoice from '../../components/dropdown/SingleChoice';
import Input from '../../components/input/Input';
import Svgs from '../../constants/Svgs';

type Props = NativeStackScreenProps<StackParamList, 'Home'>;

type Genders = {
  id?: string;
  label?: string;
  value?: any;
};
const dataGender: Genders[] = [
  {
    id: 'MALE',
    label: 'MALE',
    value: 'MALE',
  },
  {id: 'FEMALE', label: 'FEMALE', value: 'FEMALE'},
  {id: 'OTHER', label: 'OTHER', value: 'OTHER'},
];

const Home = ({navigation}: Props) => {
  const [check, setCheck] = useState<boolean>(false);
  const [gender, setGender] = useState<Genders[]>([]);
  const [text, setText] = useState<string>('');
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => setCheck(true)}>
        <Text style={{fontFamily: 'SyneMono-Regular'}}>Home</Text>
      </TouchableOpacity>
      {/* <Checkbox
        checked={check}
        onPress={() => setCheck(!check)}
        type="radio"
        text="Day la component check box"
        // disabled
      /> */}
      {/* <Input
        label="Username"
        icon={<Svgs.SearchHint />}
        iconPosition={'left'}
        value={text}
        onChangeText={(value: string) => setText(value)}
      /> */}
      <SingleChoice
        data={dataGender}
        title={'Gender'}
        itemText="value"
        itemValue="id"
        // onClose={() => setCheck(false)}
        onChange={(value: Genders[]) => setGender(value)}
        value={gender}
        searchable
        textPlaceholder={'Nhap gioi tinh de tim kiem'}
        label="Gioi tinh"
        // noneInput
        // disabled
      />
      <View
        style={{
          marginTop: 20,
          alignItems: 'center',
          flexDirection: 'row',
          justifyContent: 'center',
        }}>
        <View style={{alignItems: 'center', flex: 1}}>
          <Svgs.ArrowDown width={20} height={20} />
          <Text style={{textAlign: 'center'}}>Create Application</Text>
        </View>
        <View style={{alignItems: 'center', flex: 1}}>
          <Svgs.ArrowDown width={20} height={20} />
          <Text style={{textAlign: 'center'}}>Create Application</Text>
        </View>
        <View style={{alignItems: 'center', flex: 1}}>
          <Svgs.ArrowDown width={20} height={20} />
          <Text style={{textAlign: 'center'}}>Create Application</Text>
        </View>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});

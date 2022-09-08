import {
  Image,
  ImageStyle,
  StyleProp,
  StyleSheet,
  Text,
  View,
  ViewStyle,
} from 'react-native';
import React, {useState} from 'react';
import Row from '../row/Row';
import Button from '../button/Button';
import {COLORS} from '../../constants/colors';
import {FONT_SIZES} from '../../constants/fontSizes';
import { ICONS } from '../../constants/icon';

interface Iprops {
  title?: string;
  dateTime?: string;
  description?: string;
  icSource?: any;
  iconStyle?: StyleProp<ImageStyle>;
  containerStyle?: StyleProp<ViewStyle>;
}
/**
 * @param icSource
 * @param title
 * @param dateTime
 * @param description  
 * @returns void
 */
const Parcel: React.FC<Iprops> = ({...props}: Iprops) => {
  const {title, dateTime, description, iconStyle, containerStyle, icSource} =
    props;
  const [checkConfirm, setCheckConfirm] = useState(false);
  /**
   * hàm xử lý API và render btn thành Icon tích xanh
   */
  const handlerConfirm = () => {
    console.log('confirm');
    setCheckConfirm(true);
  };


  const changeBtnToIcon = () => {
    if (!checkConfirm) {
      return (
        <Button
          title="Confirm"
          onPress={handlerConfirm}
          textStyle={styles.txtTitle}
          containerStyle={[styles.buttonConfirm]}
        />
      );
    }
    return (
        <Image source ={ICONS.ic_confirmed} style={styles.iconConfirmed} resizeMode='contain'/>
    )
  };

  return (
    <View style={[styles.container, containerStyle]}>
      <Row styleContainer={[styles.Row]}>
        <Image source={icSource} style={[styles.image,iconStyle]} />
        <View style={[styles.bodyParcel]}>
          <Text style={[styles.txtTitleBody]}>{title}</Text>
          <Text style={styles.txtDateAndDescription}>{dateTime}</Text>
          <Text style={styles.txtDateAndDescription}>{description}</Text>
        </View>
        {changeBtnToIcon()}
      </Row>
    </View>
  );
};

export default Parcel;

const styles = StyleSheet.create({
  container: {
    height: 88,
    width: '90%',
    marginLeft: 15,
    marginTop: 30,

    // borderRadius:50,
    // backgroundColor:'#FFFFFF80',
  },
  Row: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF80',
    borderRadius: 12,
  },
  image: {
    width: 56,
    height: 56,
    borderRadius: 24,
  },
  bodyParcel: {
    height: '100%',
    width: '50%',
    // alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 16,
  },
  txtTitle: {
    color: '#466FFF',
    fontSize: 14,
  },
  buttonConfirm: {
    // flex:1,
    backgroundColor: '#ECF1FF',
    height: '50%',
    width: 80,
  },
  txtTitleBody: {
    color: '#14142B',
    fontSize: 14,
    fontWeight: '600',
  },
  txtDateAndDescription: {
    fontSize: 13,
    color: '#4E4B66',
    fontWeight: '400',
  },
  iconConfirmed:{
    //   height: 50,
    //   width: 50,
    //   backgroundColor: 'red'
  }
});

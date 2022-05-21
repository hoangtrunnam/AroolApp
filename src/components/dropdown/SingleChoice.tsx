import {
  FlatList,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  KeyboardAvoidingView,
} from 'react-native';
import Modal from 'react-native-modal';
import React, {useEffect, useState} from 'react';
import Checkbox from '../checkbox/Checkbox';
import {COLORS} from '../../constants/colors';
import Input, {InputProps} from '../input/Input';
import Svgs from '../../constants/Svgs';
import {nonAccentVietnamese} from '../../utils/strings';

interface Props extends InputProps {
  data: any;
  title?: string;
  itemText: any;
  itemValue: any;
  onChange: (data: any) => void;
  value: any;
  onOpen?: () => void;
  onClose?: () => void;
  textPlaceholder?: string;
  searchable?: boolean;
}

const SingleChoice = (props: Props) => {
  const [isModal, setIsModal] = useState<boolean | undefined>(false);
  const [data, setData] = useState<any>([]);
  const [search, setSearch] = useState<string>('');
  const [choice, setChoice] = useState<any>([]);

  useEffect(() => {
    setData(props.data ? props.data : []);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const checkSelection = (item: any) => {
    if (props.onChange) {
      if (item[props.itemValue] === props.value[props.itemValue]) {
        setChoice('');
        props.onChange({});
        hide();
      } else {
        setChoice(item[props.itemText]);
        props.onChange(item);
        hide();
      }
    }
  };

  const hide = () => {
    setSearch('');
    setIsModal(false);
    if (props.onClose) {
      props.onClose();
    }
  };

  const debounce = (func: void, timer: number) => {
    const delayDebounceFn = setTimeout(() => {
      func;
    }, timer);

    return () => clearTimeout(delayDebounceFn);
  };

  const onSearch = (text: string) => {
    setSearch(text);
    let arr = [];
    if (text) {
      arr = props.data.filter((e: any) =>
        nonAccentVietnamese(String(e[props.itemText])).includes(
          nonAccentVietnamese(text.trim()),
        ),
      );
    } else {
      arr = props.data;
    }
    setData(arr);
  };
  const renderChoice = () => {
    return (
      <Modal
        onBackdropPress={() => hide()}
        isVisible={isModal}
        style={styles.modalMain}
        avoidKeyboard
        animationOutTiming={500}>
        <View style={styles.container}>
          <View style={styles.modalView}>
            <View style={styles.modalTitleView}>
              <View style={styles.header}>
                <Text style={styles.modalTitle}>{props.title}</Text>
              </View>
            </View>
            {props.searchable && (
              <Input
                style={styles.searchInput}
                placeholder={props.textPlaceholder}
                icon={<Svgs.SearchHint />}
                onChangeText={text => debounce(onSearch(text), 500)}
                value={search}
              />
            )}
            {data.length > 0 ? (
              <View style={styles.listView}>
                <FlatList
                  showsVerticalScrollIndicator={false}
                  data={data}
                  renderItem={({item, index}) => (
                    <TouchableOpacity
                      onPress={() => checkSelection(item)}
                      style={styles.listLabel}
                      key={index}>
                      <Checkbox
                        type={'radio'}
                        checked={
                          item[props.itemValue] === props.value[props.itemValue]
                        }
                        onPress={() => checkSelection(item)}
                        text={item[props.itemText]}
                      />
                    </TouchableOpacity>
                  )}
                  keyExtractor={(item, index) => index.toString()}
                />
              </View>
            ) : (
              <View style={styles.empty}>
                <Text>{'Chưa có dữ liệu'}</Text>
              </View>
            )}
          </View>
        </View>
      </Modal>
    );
  };

  const handleOpenModal = () => {
    if (!props.disabled) {
      return (
        <TouchableOpacity onPress={() => setIsModal(true)}>
          <Input
            {...props}
            icon={<Svgs.ArrowDown />}
            iconPosition="right"
            value={choice}
            noneInput
          />
        </TouchableOpacity>
      );
    } else {
      return (
        <View>
          <Input
            {...props}
            icon={<Svgs.ArrowDown />}
            iconPosition="right"
            value={choice}
            noneInput
          />
        </View>
      );
    }
  };

  return (
    <View>
      {handleOpenModal()}
      {renderChoice()}
    </View>
  );
};

export default SingleChoice;

const styles = StyleSheet.create({
  modalMain: {
    flex: 1,
    justifyContent: 'flex-end',
    margin: 0,
  },
  modalTitleView: {
    padding: 10,
    alignItems: 'center',
  },
  modalView: {
    backgroundColor: '#fff',
    height: '50%',
    borderRadius: 10,
  },
  modalTitle: {
    fontSize: 15,
    color: '#000',
    fontWeight: '600',
  },
  icon: {
    width: 14,
    height: 14,
  },
  listView: {
    paddingHorizontal: 20,
    maxHeight: '70%',
    marginBottom: 20,
    paddingVertical: 10,
  },
  label: {
    marginTop: 10,
  },
  header: {paddingTop: 10, justifyContent: 'center'},
  listLabel: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    paddingVertical: 5,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.grayscale_04,
  },
  empty: {
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchInput: {
    marginHorizontal: 20,
  },
  flex_1: {flex: 1},
  container: {
    backgroundColor: 'white',
    borderRadius: 4,
    borderColor: 'rgba(0, 0, 0, 0.1)',
  },
});

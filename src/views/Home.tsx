import { StyleSheet, Text, View } from 'react-native'
import React,{useContext} from 'react'
import { ThemeContext } from '../theme/themeManage/themeManage';

const Home = () => {
    const context = useContext(ThemeContext);
  return (
    <View style={[styles.container, {backgroundColor :context.theme==='dark'?'red':'yellow'}]}>
      <Text style={[styles.txtTitle,{color:context.theme==='dark'?'white':'black'}]}>hoang trung nam</Text>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
    container:{

    },
    txtTitle:{

    }
})
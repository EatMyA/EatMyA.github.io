import * as React from 'react';
import { StyleSheet, } from 'react-native';
import { Text, View } from '../components/Themed';
import { RootStackScreenProps } from '../types';
import Back from '../assets/images/back.jsx';
import Loaded from '../assets/images/loaded.jsx';
import { useFonts } from 'expo-font';
export default function Student03({navigation}: RootStackScreenProps<'NotFound'>) {

  let [fontsLoaded] = useFonts({
    'Urbanist': require('../../../rn/AwesomeProject/assets/fonts/Urbanist-Regular.ttf'),
    'OpenSans400': require('../../../rn/AwesomeProject/assets/fonts/OpenSans-Regular.ttf'),
    'OpenSans600': require('../../../rn/AwesomeProject/assets/fonts/OpenSans-ExtraBold.ttf'),
    'urbanist600': require('../../../rn/AwesomeProject/assets/fonts/Urbanist-ExtraBold.ttf'),

  });
  if (!fontsLoaded) {
    return <Text>ошибка</Text>
  }
  return (

    <View style={styles.container}>
      <View style={styles.wrapper}>
        <View><Back/></View>
        <Text style={styles.textStudent}>Log in or Sign up as Student</Text>

      </View>
      <View style={{justifyContent:"center" ,alignItems:"center",height:'100%'}}>
        <Loaded />
      </View>


    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    height:'100%',
    overflow: "hidden",

    paddingTop: 10,
    borderTopRightRadius: 18,
    borderTopLeftRadius: 18,

  },
  wrapper: {
    overflow: "hidden",
    width: '100%',
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
    marginTop: 4,
    paddingHorizontal: 20,
    paddingTop: 28,
  },
  textStudent: {
    fontFamily: 'Urbanist',
    width: '100%',
    textAlign: 'center',
    fontSize: 18,
  },


});
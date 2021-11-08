import * as React from 'react';
import { StyleSheet, ImageBackground } from 'react-native';
import { Text, View } from '../components/Themed';
import { RootStackScreenProps } from '../types';

import { useFonts } from 'expo-font';

import Student from "../assets/images/student";
import Tutor from "../assets/images/tutor";
export default function Student01({navigation}: RootStackScreenProps<'NotFound'>) {

  let [fontsLoaded] = useFonts({
    'Urbanist': require('../assets/fonts/Urbanist-Regular.ttf'),
    'Urbanist700': require('../assets/fonts/Urbanist-Bold.ttf'),
    'Urbanist600': require('../assets/fonts/Urbanist-ExtraBold.ttf'),
    'Expletus500': require('../assets/fonts/ExpletusSans-Medium.ttf'),
    'roboto400': require('../assets/fonts/Roboto-Regular.ttf'),
    'openSans400': require('../assets/fonts/OpenSans-Regular.ttf'),

  });
  if (!fontsLoaded) {
    return <Text>Шрифты не загрузились</Text>;
  }
  const image = require("../assets/images/xpertia.png");

  return (

    <View style={styles.container}>
      <View>
        <ImageBackground source={image} resizeMode="cover" style={styles.image}>

          <Text style={{
            fontSize: 50,
            fontFamily: 'Expletus500',
            marginBottom: 6,
            paddingTop: 220,
            color: 'white'
          }}>Xpertia</Text>
          <Text style={{fontSize: 30, fontFamily: 'Urbanist',  eight: 400, color: 'white', marginBottom: 40}}>Fantastic
            Tutors Fast</Text>

        </ImageBackground>
      </View>

      <View style={styles.wrapper}>
        <Text style={styles.textStudent}>Register as</Text>
        <View style={{flexDirection: "row"}}>
          <View style={styles.continueFirst}>
            <Student />
            <Text style={{fontFamily: 'urbanist600', fontSize: 16, paddingVertical: 12}}>Student</Text>
            <Text style={{fontFamily: 'roboto400', fontSize: 12,}}>I’m looking for a tutor </Text>
          </View>
          <View style={styles.continueSecond}>
            <Tutor />
            <Text style={{fontFamily: 'Urbanist600', fontSize: 16, paddingVertical: 12}}>Tutor</Text>
            <Text style={{fontFamily: 'roboto400', fontSize: 12,}}>I’d like to teach</Text>
          </View>
        </View>
        <Text style={{textAlign: "center",fontFamily:'openSans400',fontSize:18,marginTop:40}}>Skip</Text>
      </View>


    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    overflow: "hidden",
    height: '100%',
  },
  image: {
    paddingHorizontal: 12,

  },
  wrapper: {
    overflow: "hidden",
    width: '100%',
    marginTop: -20,
    paddingHorizontal: 12,
    paddingTop: 30,
    borderTopRightRadius: 18,
    borderTopLeftRadius: 18,
  },
  backPadding: {
    paddingLeft: 12,
  },
  textStudent: {
    fontFamily: 'Urbanist700',
    width: '100%',
    fontSize: 18,
    marginBottom: 20
  },
  registration: {},
  continueFirst: {
    flex: 1,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    marginBottom: 12,
    borderRadius: 6,
    textAlign: "center",
    alignItems: "center",
    marginRight: 10,
    padding: 20
  },
  continueSecond: {
    flex: 1,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    marginBottom: 12,
    borderRadius: 6,
    textAlign: "center",
    alignItems: "center",
    marginLeft: 10,
    padding: 20
  },
});
import * as React from 'react';
import { StyleSheet, TextInput, TouchableOpacity, Pressable } from 'react-native';
import { Text, View } from '../components/Themed';
import { RootStackScreenProps } from '../types';
import Jackdaw from '../assets/images/jackdaw.jsx';
import Xcircle from '../assets/images/xcircle.jsx';
import Flag from '../assets/images/flag.jsx';
import Lock from '../assets/images/lock.jsx';
import Envelope from '../assets/images/envelope.jsx';
import Apple from '../assets/images/apple.jsx';
import Facebook from '../assets/images/facebook.jsx';
import Google from '../assets/images/google.jsx';
import Back from '../assets/images/back.jsx';
import { useFonts } from 'expo-font';

export default function Student02({navigation}: RootStackScreenProps<'NotFound'>) {

  let [fontsLoaded] = useFonts({
    'Urbanist': require('../assets/fonts/Urbanist-Regular.ttf'),
    'OpenSans400': require('../assets/fonts/OpenSans-Regular.ttf'),
    'OpenSans600': require('../assets/fonts/OpenSans-ExtraBold.ttf'),
    'Urbanist600': require('../assets/fonts/Urbanist-ExtraBold.ttf'),

  });
  if (!fontsLoaded) {
    return <Text> Шрифты не загрузились</Text>;
  }
  return (

    <View style={styles.container}>
      <View style={styles.wrapper}>
        <View><Back /></View>
        <Text style={styles.textStudent}>Log in or Sign up as Student</Text>
        <View><Xcircle /></View>
      </View>
      <View style={styles.inputNumber}>
        <Text style={styles.textNumber}>Number</Text>
        <View style={{
          flexDirection: "row", alignItems: 'center', shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,

          elevation: 5,
          borderRadius: 6,
          paddingVertical: 16,
          paddingHorizontal: 20,
          marginBottom: 12
        }}>
          <Flag style={{marginRight: 12}} />
          <TextInput style={styles.inputStyle}


                     placeholder="(123) 1231-12-223"
                     placeholderTextColor="#000"


          />
          <Jackdaw />
        </View>
        <View style={{flexDirection: "row", marginBottom: 8}}>

          <Lock style={{marginRight: 10}}/>

          <Text style={{fontSize: 12, fontFamily: 'OpenSans400'}}>The specialists do not see your number. You choose {'\n'} who
            will have access to it.</Text>
        </View>
        <Pressable style={styles.button}>
          <Text style={styles.text}>Continue</Text>
        </Pressable>
        <View style={{borderBottomWidth: 1, borderColor: '#D6CFE6', marginVertical: 20}}>

        </View>

        <View style={styles.continue}>

          <Envelope style={styles.marginAutoSvg}/>

          <Text style={styles.convertText}>
            Continue with E-mail
          </Text>
        </View>
        <View style={styles.continue}>

          <Facebook style={styles.marginAutoSvg}/>

          <Text style={styles.convertText}>
            Continue with Facebook
          </Text>
        </View>
        <View style={styles.continue}>

          <Apple style={styles.marginAutoSvg}/>

          <Text style={styles.convertText}>
            Continue with Apple
          </Text>
        </View>

        <View style={styles.continue}>

          <Google style={styles.marginAutoSvg} />

          <Text style={styles.convertText}>
            Continue with Google
          </Text>
        </View>
      </View>


    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop:10,
    overflow: "hidden",
    height: '100%',
    marginTop: 20,
    borderTopRightRadius: 18,
    borderTopLeftRadius: 18,

  },
  wrapper: {
    overflow: "hidden",
    width: '100%',
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 20,
    marginTop: 3,
    paddingHorizontal:30,
    textAlign:'center'
  },
  textStudent: {
    fontFamily: 'Urbanist',
    width: '100%',
    textAlign: 'center',
    fontSize: 18,

  },
  backPadding: {
    paddingLeft: 13,
  },
  inputNumber: {
    paddingHorizontal: 17,
  },
  inputStyle: {
    flex: 1,
    fontSize: 14,
    fontFamily: 'OpenSans600'
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 6,
    elevation: 3,
    backgroundColor: '#543393',
    color: 'white',

  },
  text: {
    color: 'white',
    fontSize: 14,
    fontFamily: 'Urbanist600'

  },
  textNumber: {
    opacity: 0.5,
    fontSize: 12,
    fontFamily: 'OpenSans400',
    marginBottom: 6
  },
  convertText: {
    fontFamily: 'Urbanist600',
    fontSize: 14,
    marginRight:'auto'
  },
  continue: {
    flexDirection: "row",
    padding: 20,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    marginBottom: 12,
    borderRadius: 6,
    alignItems:'center',
    justifyContent:'center'
  },
  marginAutoSvg:{
    marginRight:'auto'
  }
});
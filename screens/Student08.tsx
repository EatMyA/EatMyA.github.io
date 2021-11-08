import * as React from 'react';
import { StyleSheet, TextInput, Pressable } from 'react-native';
import { Text, View } from '../components/Themed';
import { RootStackScreenProps } from '../types';
import Back from '../assets/images/back.jsx';
import Circle from '../assets/images/xcircle.jsx';
import Mail from '../assets/images/mail.jsx';
import LockPurple from '../assets/images/lockPurple.jsx';
import EyeOff from '../assets/images/eyeOff.jsx';
import { useFonts } from 'expo-font';
import { useState } from "react";
import Phone from "../assets/images/phone";
import FacebookDark from "../assets/images/facebookDark";
import AppleDark from "../assets/images/appleDark";
import GoogleDark from "../assets/images/googleDark";
export default function Student08({navigation}: RootStackScreenProps<'NotFound'>) {
  const [count, setCount] = useState(false);
  let [fontsLoaded] = useFonts({
    'Urbanist': require('../../../rn/AwesomeProject/assets/fonts/Urbanist-Regular.ttf'),
    'OpenSans400': require('../../../rn/AwesomeProject/assets/fonts/OpenSans-Regular.ttf'),
    'OpenSans600': require('../../../rn/AwesomeProject/assets/fonts/OpenSans-ExtraBold.ttf'),
    'urbanist500': require('../../../rn/AwesomeProject/assets/fonts/Urbanist-Medium.ttf'),
    'urbanist600': require('../../../rn/AwesomeProject/assets/fonts/Urbanist-ExtraBold.ttf'),
    'OpenSans700': require('../../../rn/AwesomeProject/assets/fonts/Urbanist-Bold.ttf'),

  });
  if (!fontsLoaded) {
    return <Text>das</Text>;
  }
  return (

    <View style={styles.container}>
      <View style={styles.wrapper}>
        <View><Back /></View>
        <Text style={styles.textStudent}>Log in as a Student</Text>
        <View><Circle /></View>
      </View>
      <View style={styles.inputName}>

        <View >
          <Text style={styles.textNumber}>E-mail</Text>
          <View style={styles.inputs}>
            <Mail style={{marginRight: 20}} />
            <TextInput style={styles.inputStyle}


                       placeholder="example@mail.com"
                       placeholderTextColor="#000"


            />

          </View>
        </View>

        <View >
          <Text style={styles.textNumber}>Create a password</Text>
          <View style={styles.inputs}>
            <LockPurple style={{marginRight: 20}} />
            <TextInput style={styles.inputStyle}


                       placeholder="********"
                       placeholderTextColor="#000" />
            <EyeOff />

          </View>
        </View>


        <View style={{marginTop: 10}}>
          <Pressable style={styles.button}>
            <Text style={styles.text}>Log In</Text>
          </Pressable>
        </View>
        <View style={{borderBottomWidth: 1, borderColor: '#D6CFE6', marginVertical: 20}}>

        </View>
        <View style={styles.continue}>

          <Phone style={styles.marginAutoSvg}/>

          <Text style={styles.convertText}>
            Continue with Phone
          </Text>
        </View>
        <View style={styles.continue}>

          <FacebookDark style={styles.marginAutoSvg}/>

          <Text style={styles.convertText}>
            Continue with Facebook
          </Text>
        </View>
        <View style={styles.continue}>

          <AppleDark style={styles.marginAutoSvg}/>

          <Text style={styles.convertText}>
            Continue with Apple
          </Text>
        </View>

        <View style={styles.continue}>

          <GoogleDark style={styles.marginAutoSvg} />

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
    overflow: "hidden",
    height: '100%',
    marginTop: 20,
    borderTopRightRadius: 18,
    borderTopLeftRadius: 18,

  },
  convertText: {
    fontFamily: 'urbanist600',
    fontSize: 14,
    marginRight:'auto'
  },

  wrapper: {
    overflow: "hidden",
    width: '100%',
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 20,
    marginTop: 4,
    paddingHorizontal:30,
    textAlign:'center',
    paddingTop:12
  },
  textStudent: {
    fontFamily: 'Urbanist',
    width: '100%',
    textAlign: 'center',
    fontSize: 18,
  },
  backPadding: {
    paddingLeft: 12,
  },
  inputName: {
    paddingHorizontal: 17,
  },
  inputStyle: {
    flex: 1,
    fontSize: 14,
    fontFamily: "OpenSans600"
  },
  button: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 18,
    paddingHorizontal: 32,
    borderRadius: 6,
    elevation: 3,
    backgroundColor: '#543393',
    color: 'white',


  },
  text: {
    color: 'white',
    fontSize: 14,
    fontFamily: 'urbanist500'

  },
  textNumber: {
    opacity: 0.5,
    fontSize: 12,
    fontFamily: 'OpenSans400',
    marginBottom: 6
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
  inputs: {
    flexDirection: "row", alignItems: 'center', shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
    borderRadius: 6,
    height: 50,
    paddingHorizontal: 20,
    marginBottom: 12
  },
  marginAutoSvg:{
    marginRight:'auto'
  }
});
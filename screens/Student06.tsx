import * as React from 'react';
import { StyleSheet, TextInput, Pressable } from 'react-native';
import { Text, View } from '../components/Themed';
import { RootStackScreenProps } from '../types';
import Back from '../assets/images/back.jsx';
import Circle from '../assets/images/xcircle.jsx';
import { useFonts } from 'expo-font';
export default function NotFoundScreen({navigation}: RootStackScreenProps<'NotFound'>) {

  let [fontsLoaded] = useFonts({
    'Urbanist': require('../../../rn/AwesomeProject/assets/fonts/Urbanist-Regular.ttf'),
    'OpenSans400': require('../../../rn/AwesomeProject/assets/fonts/OpenSans-Regular.ttf'),
    'OpenSans600': require('../../../rn/AwesomeProject/assets/fonts/OpenSans-ExtraBold.ttf'),
    'urbanist600': require('../../../rn/AwesomeProject/assets/fonts/Urbanist-ExtraBold.ttf'),
    'urbanist500': require('../../../rn/AwesomeProject/assets/fonts/Urbanist-Medium.ttf'),

  });
  if (!fontsLoaded) {
    return <Text>error</Text> ;
  }
  return (

    <View style={styles.container}>
      <View style={styles.wrapper}>
        <View style={styles.backPadding}><Back /></View>
        <Text style={styles.textStudent}>Your Details</Text>
        <View><Circle /></View>
      </View>
      <View style={styles.inputName}>
        <View style={{flexDirection: "row"}}>
          <View style={{flex: 1, marginRight: 10}}>
            <Text style={styles.textNumber}>First name*</Text>
            <View style={styles.inputs}>

              <TextInput style={styles.inputStyle}


                         placeholder="Maxim"
                         placeholderTextColor="#000"


              />

            </View>
          </View><View style={{flex: 1, marginLeft: 10}}>
          <Text style={styles.textNumber}>Last name</Text>
          <View style={styles.inputs}>

            <TextInput style={styles.inputStyle}


                       placeholder="Kuzmin"
                       placeholderTextColor="#000"


            />

          </View>
        </View>
        </View>
        <View >
          <Text style={styles.textNumber}>Date of Birth</Text>
          <View style={styles.inputs}>

            <TextInput style={styles.inputStyle}


                       placeholder="02/12/1987"
                       placeholderTextColor="#000"


            />

          </View>
        </View>

        <View style={{flexDirection: "row", marginBottom: 8}}>

          <Text style={{fontSize: 10, fontFamily: "OpenSans400"}}><Text style={{opacity: 0.5}}>By creating an account
            you agree to out </Text><Text style={{color: '#543393'}}>privacy {'\n'} policy</Text><Text
            style={{color: '#543393'}}><Text style={{opacity: 0.5}}> and</Text> terms of service.</Text></Text>
        </View>
        <View style={{marginVertical: 100}}>
          <Pressable style={styles.button}>
            <Text style={styles.text}>Create an Account</Text>
          </Pressable>
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
  wrapper: {
    overflow: "hidden",
    width: '100%',
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
    marginTop: 4,
    paddingHorizontal: 4,
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
  convertText: {
    marginHorizontal: 'auto',
    fontFamily: 'urbanist600',
    fontSize: 14,
  },
  continue: {
    flexDirection: "row",
    padding: 20,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    marginBottom: 12,
    borderRadius: 6,
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
    paddingVertical: 12,
    paddingHorizontal: 20,
    marginBottom: 12
  }
});
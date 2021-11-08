import * as React from 'react';
import { StyleSheet, TextInput } from 'react-native';
import { Text, View } from '../components/Themed';
import { RootStackScreenProps } from '../types';
import Back from '../assets/images/back.jsx';
import Circle from '../assets/images/xcircle.jsx';
import { useFonts } from 'expo-font';
export default function NotFoundScreen({navigation}: RootStackScreenProps<'NotFound'>) {

  let [fontsLoaded] = useFonts({
    'Urbanist': require('../../../rn/AwesomeProject/assets/fonts/Urbanist-Regular.ttf'),
    'Urbanist700': require('../../../rn/AwesomeProject/assets/fonts/Urbanist-Bold.ttf'),
    'OpenSans400': require('../../../rn/AwesomeProject/assets/fonts/OpenSans-Regular.ttf'),
    'OpenSans600': require('../../../rn/AwesomeProject/assets/fonts/OpenSans-ExtraBold.ttf'),
    'urbanist600': require('../../../rn/AwesomeProject/assets/fonts/Urbanist-ExtraBold.ttf'),

  });
  if (!fontsLoaded) {
    return <Text>ошибка</Text>;
  }
  return (

    <View style={styles.container}>
      <View style={styles.wrapper}>
        <View><Back /></View>
        <Text style={styles.textStudent}>Log in or Sign up as Student</Text>
        <View><Circle /></View>
      </View>
      <View style={styles.inputNumber}>
        <Text style={{fontSize: 18, fontFamily: 'Urbanist700',  marginBottom: 24}}>
          Confirm your number
        </Text>
        <Text style={styles.textCode}>Enter the code we sent over SMS to {'\n'} +44 (123) 1231-12-23:</Text>
        <View style={{flexDirection: "row", marginBottom: 12}}>
          <View style={{
            flexDirection: "row", shadowColor: "#000",
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
            marginBottom: 12,
            flex: 1,
            marginRight: 6,

          }}>

            <TextInput style={styles.inputStyle}
                       placeholder="1"

            />

          </View>
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
            marginBottom: 12,
            flex: 1,
            marginHorizontal: 6
          }}>

            <TextInput style={styles.inputStyle}
                       placeholder="1"

            />

          </View>
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
            marginBottom: 12,
            flex: 1,
            marginHorizontal: 6
          }}>

            <TextInput style={styles.inputStyle}
                       placeholder="1"

            />

          </View>
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
            marginBottom: 12,
            flex: 1,
            marginHorizontal: 6
          }}>

            <TextInput style={styles.inputStyle}
                       placeholder="1"

            />

          </View>
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
            marginBottom: 12,
            flex: 1,
            marginLeft: 6
          }}>

            <TextInput style={styles.inputStyle}
                       placeholder="1"

            />

          </View>

        </View>
        <Text style={styles.textCode}>Send a code again in 0:59 </Text>
        <Text style={{fontFamily: 'OpenSans400', opacity: 0.5, fontSize: 12}}>Change number</Text>

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
    justifyContent: "center",
    textAlign: "center",
    marginBottom: 28,
    marginTop: 4,
    paddingHorizontal: 30,
    paddingTop:12
  },
  textStudent: {
    fontFamily: 'Urbanist',
    width: '100%',
    textAlign:"center",

    fontSize: 18,
  },
  backPadding: {
    paddingLeft: 12,
  },
  inputNumber: {
    paddingHorizontal: 17,
  },
  inputStyle: {
    marginLeft:4,
    fontSize: 14,

    fontFamily: "OpenSans600"
  },


  textCode: {
    fontSize: 12,
    fontFamily: 'OpenSans400',
    marginBottom: 20
  },


});
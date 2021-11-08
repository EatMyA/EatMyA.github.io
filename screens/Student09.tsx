import * as React from 'react';
import { Pressable, StyleSheet,ScrollView} from 'react-native';
import { Text, View } from '../components/Themed';
import { RootStackScreenProps } from '../types';
import Back from '../assets/images/back.jsx';
import Cirle from '../assets/images/xcircle.jsx';
import MailBig from '../assets/images/mailBig.jsx';
import { useFonts } from 'expo-font';

export default function Student09({navigation}: RootStackScreenProps<'NotFound'>) {

  let [fontsLoaded] = useFonts({
    'Urbanist': require('../../../rn/AwesomeProject/assets/fonts/Urbanist-Regular.ttf'),
    'Urbanist700': require('../../../rn/AwesomeProject/assets/fonts/Urbanist-Bold.ttf'),
    'OpenSans400': require('../../../rn/AwesomeProject/assets/fonts/OpenSans-Regular.ttf'),
    'OpenSans600': require('../../../rn/AwesomeProject/assets/fonts/OpenSans-ExtraBold.ttf'),
    'Urbanist600': require('../../../rn/AwesomeProject/assets/fonts/Urbanist-ExtraBold.ttf'),

  });
  if (!fontsLoaded) {
    return <Text>Error</Text>;
  }
  return (

    <ScrollView style={styles.container}>
      <View style={styles.wrapper}>
        <View><Back /></View>
        <Text style={styles.textStudent}>Register as a Student</Text>
        <View>
          <Cirle />
        </View>
      </View>
      <View style={{alignItems: 'center', justifyContent: 'center', textAlign: 'center'}}>
        <View style={styles.wrapperMail}>
          <MailBig />
        </View>
        <Text style={{fontFamily: 'Urbanist700', fontSize: 24, marginVertical: 24}}>
          Confirm your E-mail
        </Text>
        <View style={{fontFamily: 'OpenSans400', fontSize: 14,}}>
          <Text style={{textAlign:'center'}}>We sent you a confirmation letter to {'\n'}<Text style={{fontFamily: 'OpenSans600'}}>example@mail.com</Text></Text>
        </View>

      </View>
      <View style={{justifyContent:"flex-end",height:'70%',alignItems:"flex-end",marginHorizontal:12,width:'94%',marginBottom:12}}>
        <Pressable style={styles.button}>
          <Text style={styles.text}>Continue</Text>

        </Pressable>
      </View>
    </ScrollView>

  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    overflow: "hidden",

    marginTop: 20,
    borderTopRightRadius: 18,
    borderTopLeftRadius: 18,

  },
  wrapper: {
    overflow: "hidden",
    width: '100%',
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 50,
    marginTop: 4,
    paddingHorizontal:30,
    textAlign:'center',
    paddingTop:10
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
  wrapperMail: {
    flexDirection: "row",
    alignItems: 'center',
    justifyContent: 'center',
    width: 120,
    height: 120,
    borderRadius: 100,
    backgroundColor: '#fcdeea'
  },
  button: {
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

  },
});
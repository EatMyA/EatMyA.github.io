import * as React from 'react';
import { StyleSheet, TextInput, ScrollView, Pressable } from 'react-native';
import { Text, View } from '../components/Themed';
import { RootStackScreenProps } from '../types';

import { useFonts } from 'expo-font';
import Xcircle from "../assets/images/xcircle";


export default function Student21({navigation}: RootStackScreenProps<'NotFound'>) {
  let [fontsLoaded] = useFonts({
    'OpenSans400': require('../../../rn/AwesomeProject/assets/fonts/OpenSans-Regular.ttf'),
    'Urbanist700': require('../../../rn/AwesomeProject/assets/fonts/Urbanist-Bold.ttf'),
    'Urbanist800': require('../../../rn/AwesomeProject/assets/fonts/Urbanist-ExtraBold.ttf'),
    'Urbanist600': require('../../../rn/AwesomeProject/assets/fonts/Urbanist-Medium.ttf'),
    'Urbanist500': require('../../../rn/AwesomeProject/assets/fonts/Urbanist-Medium.ttf'),


  });
  if (!fontsLoaded) {
    return <Text>error</Text> ;
  }
  return (
    <View>
    <ScrollView style={styles.mainWrapper}>
      <View style={{
        borderTopRightRadius: 18,
        borderTopLeftRadius: 18,
      }}>
        <View style={styles.container}>



          <View style={{alignItems: 'center', marginTop: 20}}>
            <View style={{height: 5, width: 50, backgroundColor: '#20203A', opacity: 0.3, borderRadius: '100px'}}/>
            <View style={styles.wrapper}>

              <Text style={styles.textStudent}>Order details</Text>

              <View><Xcircle/></View>

            </View>
            <Text style={{ fontFamily: 'OpenSans400', fontSize: 18,opacity:0.5,width:'100%'}}>Tell tutors what you want to{'\n'}learn...</Text>
          </View>
        </View>
      </View>

    </ScrollView>

      <View style={{width:'100%',bottom:0,position:'absolute',alignItems:'center'}}>
          <View style={{flexDirection:"row",marginBottom:20,justifyContent:'space-between',width:'100%',alignItems:'center',paddingHorizontal:18}}>
            <Text style={{opacity:0.5,fontFamily:'OpenSans400'}}>0/400</Text>
            <Pressable style={styles.button}>
              <Text style={styles.text}>Continue</Text>
            </Pressable>
          </View>
      </View>
        </View>
  );
}

const styles = StyleSheet.create({
  mainWrapper: {
    overflow: "hidden",
    height: '100%',
    backgroundColor: 'white'
  },
  container: {
    marginBottom: 35,
    paddingHorizontal: 18,
  },
  button: {
    width: '50%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 18,
    paddingHorizontal: 32,
    borderRadius: 6,
    elevation: 3,
    backgroundColor: '#543393',
    color: 'white',
    marginLeft:'auto',

  },
  text: {
    color: 'white',
    fontSize: 14,

    fontFamily: 'Urbanist600'

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
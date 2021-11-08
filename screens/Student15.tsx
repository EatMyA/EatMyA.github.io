import * as React from 'react';
import { StyleSheet, TextInput, ScrollView, TouchableOpacity, ImageBackground, } from 'react-native';
import { Text, View } from '../components/Themed';
import { RootStackScreenProps } from '../types';

import { useFonts } from 'expo-font';

import Back from "../assets/images/back";
import Heart from "../assets/images/heart";
import Order from "../assets/images/order";
import Messages from "../assets/images/messages";
import Account from "../assets/images/account";
import Cancel from "../assets/images/cancel";
import Explore from "../assets/images/explore";
import Arrow from "../assets/images/arrow";
import { useState } from "react";
import RNPickerSelect from 'react-native-picker-select';


export default function Student13({navigation}: RootStackScreenProps<'NotFound'>) {
  const [hover, setHover] = useState(-1);
  const hoverColor = '#D6CFE6';
  let [fontsLoaded] = useFonts({
    'OpenSans400': require('../../../rn/AwesomeProject/assets/fonts/OpenSans-Regular.ttf'),
    'Urbanist700': require('../../../rn/AwesomeProject/assets/fonts/Urbanist-Bold.ttf'),
    'Urbanist800': require('../../../rn/AwesomeProject/assets/fonts/Urbanist-ExtraBold.ttf'),
    'Urbanist600': require('../../../rn/AwesomeProject/assets/fonts/Urbanist-Medium.ttf'),


  });
  if (!fontsLoaded) {
    return <Text>error</Text>;
  }

  return (
    <View style={styles.mainWrapper}>
      <ScrollView style={{
        borderTopRightRadius: 18,
        borderTopLeftRadius: 18,
      }}>

        <View style={styles.container}>
          <View style={{alignItems: 'center', marginTop: 12, marginBottom: 20}}>
            <View style={{overflow: "hidden",
              width: '100%',
              flexDirection: "row",
              justifyContent: "center",
              marginBottom: 20,
              marginTop: 3,
              paddingHorizontal:18,
              paddingTop:20,
            }}>
              <View><Back /></View>
              <Text style={{textAlign: 'center',width: '100%', fontFamily: 'Urbanist700', fontSize: 18}}>Find a Tutor</Text>
              <View><Cancel/></View>
            </View>
            <View style={{justifyContent: 'center', flexDirection: "row", marginBottom: 40}}>
              <View
                style={{width: 30, borderWidth: 3, borderColor: '#2E0C59', borderRadius: 100, marginRight: 5}}/>
              <View style={{
                width: 18,
                borderWidth: 3,
                borderColor: '#D6CFE6',
                borderRadius: 100,
                marginHorizontal: 5
              }}/>
              <View style={{
                width: 18,
                borderWidth: 3,
                borderColor: '#D6CFE6',
                borderRadius: 100,
                marginHorizontal: 5
              }}/>
              <View style={{
                width: 18,
                borderWidth: 3,
                borderColor: '#D6CFE6',
                borderRadius: 100,
                marginHorizontal: 5
              }}/>
              <View style={{
                width: 18,
                borderWidth: 3,
                borderColor: '#D6CFE6',
                borderRadius: 100,
                marginHorizontal: 5
              }}/>
              <View style={{
                width: 18,
                borderWidth: 3,
                borderColor: '#D6CFE6',
                borderRadius: 100,
                marginHorizontal: 5
              }}/>
              <View
                style={{width: 18, borderWidth: 3, borderColor: '#D6CFE6', borderRadius: 100, marginLeft: 5}}/>
            </View>
            <Text style={{textAlign: 'center', fontFamily: 'OpenSans400', fontSize: 14}}>Choose the subject would you
              like {"\n"}help with?</Text>
          </View>
          <RNPickerSelect
            onValueChange={(value) => console.log(value)}
            style={{
              ...pickerSelectStyles,
              iconContainer: {
                backgroundColor:'white',
                marginRight:3,
                top:18,
                right:6
              },
              placeholder: {
                color: 'black',
                fontSize: 14,
                fontFamily: 'Urbanist500',
              },
            }}
            placeholder={{
              label: 'Select your level',
              value: null,
            }}
            items={[
              { label: 'Pre-school', value: 'Pre-school' },
              { label: 'Key Stage 1 - Years 1-2 ', value: 'Key Stage 1 - Years 1-2 ' },
              { label: 'Key Stage 2 - Years 3-6', value: 'Key Stage 2 - Years 3-6' },
              { label: 'Senior School -  Years 7-11', value: 'Senior School -  Years 7-11' },
              { label: 'A Levels & College - Years 12-13 ', value: 'A Levels & College - Years 12-13 ' },
              { label: 'University - Undergraduate', value: 'University - Undergraduate' },
              { label: 'University - Postgraduate', value: 'University - Postgraduate' },
              { label: 'Adult Education', value: 'Adult Education' },
            ]}
            Icon={() => {
              return <Arrow />;
            }}
          />
        </View>


      </ScrollView>
      <View style={{
        borderTopRightRadius: 18,
        borderTopLeftRadius: 18,
      }}>

        <View style={{width:'100%',bottom:0,position:'absolute',alignItems:'center'}}>
          <View style={{borderWidth: 1, borderColor: '#F2F0F5', marginBottom: 12}}/>

          <View style={{flexDirection: "row", alignItems: "center", paddingHorizontal: 18}}>
            <View style={{justifyContent: "center", alignItems: 'center', marginRight: 13}}>
              <View style={{marginTop: 'auto'}}>
                <Explore style={{marginBottom:6}}/>
              </View>
              <View style={{height: '50%', backgroundColor: 'transparent'}}>
                <Text style={{color: '#90909d', fontSize: 10, fontFamily: 'Urbanist600',marginBottom:'auto'}}>Explore</Text>
              </View>
            </View>
            <View style={{justifyContent: "center", alignItems: 'center', marginHorizontal: 13}}>
              <View style={{marginTop: 'auto'}}>
                <Heart style={{marginBottom:9}}/>
              </View>
              <View style={{height: '50%', backgroundColor: 'transparent'}}>
                <Text style={{color: '#90909d', fontSize: 10, fontFamily: 'Urbanist600',marginBottom:'auto'}}>Favourites</Text>
              </View>
            </View>

            <View style={{justifyContent: "center", alignItems: 'center', marginHorizontal: 13}}>
              <View style={{marginTop: 'auto'}}>
                <Order style={{marginBottom:9}}/>
              </View>
              <View style={{height: '50%', backgroundColor: 'transparent'}}>
                <Text style={{color: '#90909d', fontSize: 10, fontFamily: 'Urbanist600',marginBottom:'auto'}}>Orders</Text>
              </View>
            </View>
            <View style={{justifyContent: "center", alignItems: 'center', marginHorizontal: 13}}>
              <View style={{marginTop: 'auto'}}>
                <Messages style={{marginBottom:7}}/>
              </View>
              <View style={{height: '50%', backgroundColor: 'transparent'}}>
                <Text style={{color: '#90909d', fontSize: 10, fontFamily: 'Urbanist600',marginBottom:'auto'}}>Favourites</Text>
              </View>
            </View>
            <View style={{justifyContent: "center", alignItems: 'center', marginLeft: 13}}>
              <View style={{marginTop: 'auto'}}>
                <Account style={{marginBottom:10}}/>
              </View>
              <View style={{height: '50%', backgroundColor: 'transparent'}}>
                <Text style={{color: '#90909d', fontSize: 10, fontFamily: 'Urbanist600',marginBottom:'auto'}}>Account</Text>
              </View>
            </View>
          </View>
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
    paddingHorizontal:18,
    marginBottom: 35,
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
    height: 40,
    paddingHorizontal: 18,
    marginBottom: 20,
  },
  inputStyle: {
    flex: 1,
    fontSize: 14,
    fontWeight: '400',
    fontFamily: "OpenSans400"
  },

});
const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 6,
    color: 'black',
    paddingRight: 30, // to ensure the text is never behind the icon
  },
  inputAndroid: {
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 0.5,
    borderColor: 'purple',
    borderRadius: 6,
    color: 'black',
    paddingRight: 30, // to ensure the text is never behind the icon
  },
});
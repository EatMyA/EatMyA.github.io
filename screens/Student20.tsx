import * as React from 'react';
import { StyleSheet, TextInput, ScrollView, Pressable } from 'react-native';
import { Text, View } from '../components/Themed';
import { RootStackScreenProps } from '../types';

import { useFonts } from 'expo-font';
import Back from "../assets/images/back";
import Cancel from "../assets/images/cancel";
import Explore from "../assets/images/explore";
import Heart from "../assets/images/heart";
import Order from "../assets/images/order";
import Messages from "../assets/images/messages";
import Account from "../assets/images/account";
import PinkPlus from "../assets/images/pinkPlus";

export default function Student20({navigation}: RootStackScreenProps<'NotFound'>) {
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
          <View style={{alignItems: 'center', marginTop: 12, marginBottom: 20}}>
            <View style={{width: '100%',
              flexDirection: "row",
              justifyContent: "center",
              marginBottom: 20,
              marginTop: 3,
              paddingHorizontal:20,
              paddingTop:20}}>
              <View ><Back /></View>
              <Text style={{textAlign: 'center',width: '100%',marginHorizontal: 'auto', fontFamily: 'Urbanist700', fontSize: 18}}>Find a Tutor</Text>
              <View><Cancel /></View>
            </View>
            <View style={{justifyContent: 'center', flexDirection: "row", marginBottom: 40}}>

              <View style={{
                width: 18,
                borderWidth: 3,
                borderColor: '#D6CFE6',
                borderRadius: 100,
                marginRight: 5
              }}/>
              <View
                style={{width: 30, borderWidth: 3, borderColor: '#2E0C59', borderRadius: 100, marginHorizontal: 5}}/>
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
            <Text style={{textAlign: 'center', fontFamily: 'OpenSans400', fontSize: 14,marginBottom:12}}>Order details</Text>
          </View>
          <View>

            <View style={styles.inputs}>
              <TextInput style={styles.inputStyle}
                         placeholder="Tell tutors what you want to learn"
                         placeholderTextColor="#20203A"
              />
            </View>



            <Pressable style={styles.buttonDashed}>
              <Text style={styles.textDashed}>Add file or photo</Text>
              <PinkPlus style={{marginLeft:'auto'}}/>

            </Pressable>

          </View>

          <View>

          </View>

        </View>
      </View>
    </ScrollView>

        <View style={{width:'100%',bottom:0,position:'absolute',alignItems:'center',marginBottom:12}}>
          <Pressable style={styles.button}>
            <Text style={styles.text}>Continue</Text>

          </Pressable>
          <View style={{borderWidth: 1, borderColor: '#F2F0F5', marginBottom: 12}}/>

          <View style={{flexDirection: "row", alignItems: "center", paddingHorizontal: 18}}>
            <View style={{justifyContent: "center", alignItems: 'center', marginRight: 13}}>
              <View style={{marginTop: 'auto'}}>
                <Explore style={{marginBottom:4}}/>
              </View>
              <View style={{height: '50%', backgroundColor: 'transparent'}}>
                <Text style={{color: '#90909d', fontSize: 10, fontFamily: 'Urbanist600',marginBottom:'auto'}}>Explore</Text>
              </View>
            </View>
            <View style={{justifyContent: "center", alignItems: 'center', marginHorizontal: 13}}>
              <View style={{marginTop: 'auto'}}>
                <Heart style={{marginBottom:6}}/>
              </View>
              <View style={{height: '50%', backgroundColor: 'transparent'}}>
                <Text style={{color: '#90909d', fontSize: 10, fontFamily: 'Urbanist600',marginBottom:'auto'}}>Favourites</Text>
              </View>
            </View>

            <View style={{justifyContent: "center", alignItems: 'center', marginHorizontal: 13}}>
              <View style={{marginTop: 'auto'}}>
                <Order style={{marginBottom:4}}/>
              </View>
              <View style={{height: '50%', backgroundColor: 'transparent'}}>
                <Text style={{color: '#90909d', fontSize: 10, fontFamily: 'Urbanist600',marginBottom:'auto'}}>Orders</Text>
              </View>
            </View>
            <View style={{justifyContent: "center", alignItems: 'center', marginHorizontal: 13}}>
              <View style={{marginTop: 'auto'}}>
                <Messages style={{marginBottom:4}}/>
              </View>
              <View style={{height: '50%', backgroundColor: 'transparent'}}>
                <Text style={{color: '#90909d', fontSize: 10, fontFamily: 'Urbanist600',marginBottom:'auto'}}>Favourites</Text>
              </View>
            </View>
            <View style={{justifyContent: "center", alignItems: 'center', marginLeft: 13}}>
              <View style={{marginTop: 'auto'}}>
                <Account style={{marginBottom:4}}/>
              </View>
              <View style={{height: '50%', backgroundColor: 'transparent'}}>
                <Text style={{color: '#90909d', fontSize: 10, fontFamily: 'Urbanist600',marginBottom:'auto'}}>Account</Text>
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
    marginBottom: 35,
    paddingHorizontal: 18,
  },
  inputs: {
    flexDirection: "row", shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
    borderRadius: 6,
    paddingBottom:180,
    paddingHorizontal: 18,
    marginBottom: 20,
    paddingTop:30,
  },
  inputStyle: {
    flex: 1,
    fontSize: 14,
    fontWeight: '500',
    fontFamily: "Urbanist500",
    opacity:0.5
  },
  button: {
    marginBottom:12,
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
    marginRight:18


  },buttonDashed: {
    flexDirection:"row",
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 6,
    elevation: 3,
    borderColor: '#EB2D7C',
    borderStyle: 'dashed',
    color: 'white',
    borderWidth:2,
    marginBottom:50

  },
  text: {
    color: 'white',
    fontSize: 14,

    fontFamily: 'Urbanist600'

  },
  textDashed: {
    color: '#EB2D7C',
    fontSize: 14,

    fontFamily: 'Urbanist600'

  },
});
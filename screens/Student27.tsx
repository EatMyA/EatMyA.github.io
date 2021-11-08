import * as React from 'react';
import { StyleSheet, TextInput, ScrollView,  Pressable } from 'react-native';
import { Text, View } from '../components/Themed';
import { RootStackScreenProps } from '../types';

import { useFonts } from 'expo-font';
import Back from "../assets/images/back";
import BigAccept from "../assets/images/bigAccept";
import Explore from "../assets/images/explore";
import Heart from "../assets/images/heart";
import Order from "../assets/images/order";
import Messages from "../assets/images/messages";
import Account from "../assets/images/account";


export default function Student27({navigation}: RootStackScreenProps<'NotFound'>) {
  let [fontsLoaded] = useFonts({
    'OpenSans400': require('../../../rn/AwesomeProject/assets/fonts/OpenSans-Regular.ttf'),
    'Urbanist700': require('../../../rn/AwesomeProject/assets/fonts/Urbanist-Bold.ttf'),
    'Urbanist800': require('../../../rn/AwesomeProject/assets/fonts/Urbanist-ExtraBold.ttf'),
    'Urbanist600': require('../../../rn/AwesomeProject/assets/fonts/Urbanist-Medium.ttf'),
    'Urbanist500': require('../../../rn/AwesomeProject/assets/fonts/Urbanist-Medium.ttf'),



  });
  if (!fontsLoaded) {
    return <Text>error</Text>;
  }
  return (
    <View>
    <ScrollView style={styles.mainWrapper}>
      <View style={{
        borderTopRightRadius: 18,
        borderTopLeftRadius: 18,
      }}>
        <View style={styles.container}>
          <View style={{overflow: "hidden",
            width: '100%',
            flexDirection: "row",
            justifyContent: "center",
            marginBottom: 20,
            marginTop: 3,
            paddingHorizontal:18,
            paddingTop:40,
          }}>
            <View><Back /></View>
            <Text style={{textAlign: 'center',width: '100%', fontFamily: 'Urbanist700', fontSize: 18}}>Find a Tutor</Text>
          </View>

          <View style={{flexDirection:"row",alignItems:'center',justifyContent:'center',marginTop:70}}>
            <BigAccept/>
          </View>

        </View>
      </View>
    </ScrollView>
        <View style={{width:'100%',bottom:0,position:'absolute',alignItems:'center',marginBottom:12}}>
          <View style={{borderWidth: 1, borderColor: '#F2F0F5', marginBottom: 12}}/>

            <Pressable style={styles.button}>
              <Text style={styles.text}>Submit</Text>

            </Pressable>

          <View style={{flexDirection: "row", alignItems: "center", paddingHorizontal: 18}}>
            <View style={{justifyContent: "center", alignItems: 'center', marginRight: 13}}>
              <View style={{marginTop: 'auto'}}>
                <Explore style={{marginBottom: 4}} />
              </View>
              <View style={{height: '50%', backgroundColor: 'transparent'}}>
                <Text style={{
                  color: '#90909d',
                  fontSize: 10,
                  fontFamily: 'Urbanist600',
                  marginBottom: 'auto'
                }}>Explore</Text>
              </View>
            </View>
            <View style={{justifyContent: "center", alignItems: 'center', marginHorizontal: 13}}>
              <View style={{marginTop: 'auto'}}>
                <Heart style={{marginBottom: 6}} />
              </View>
              <View style={{height: '50%', backgroundColor: 'transparent'}}>
                <Text style={{
                  color: '#90909d',
                  fontSize: 10,
                  fontFamily: 'Urbanist600',
                  marginBottom: 'auto'
                }}>Favourites</Text>
              </View>
            </View>

            <View style={{justifyContent: "center", alignItems: 'center', marginHorizontal: 13}}>
              <View style={{marginTop: 'auto'}}>
                <Order style={{marginBottom: 4}} />
              </View>
              <View style={{height: '50%', backgroundColor: 'transparent'}}>
                <Text style={{
                  color: '#90909d',
                  fontSize: 10,
                  fontFamily: 'Urbanist600',
                  marginBottom: 'auto'
                }}>Orders</Text>
              </View>
            </View>
            <View style={{justifyContent: "center", alignItems: 'center', marginHorizontal: 13}}>
              <View style={{marginTop: 'auto'}}>
                <Messages style={{marginBottom: 4}} />
              </View>
              <View style={{height: '50%', backgroundColor: 'transparent'}}>
                <Text style={{
                  color: '#90909d',
                  fontSize: 10,
                  fontFamily: 'Urbanist600',
                  marginBottom: 'auto'
                }}>Favourites</Text>
              </View>
            </View>
            <View style={{justifyContent: "center", alignItems: 'center', marginLeft: 13}}>
              <View style={{marginTop: 'auto'}}>
                <Account style={{marginBottom: 4}} />
              </View>
              <View style={{height: '50%', backgroundColor: 'transparent'}}>
                <Text style={{
                  color: '#90909d',
                  fontSize: 10,
                  fontFamily: 'Urbanist600',
                  marginBottom: 'auto'
                }}>Account</Text>
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
    flexDirection: "row", alignItems: 'center',
    backgroundColor:'#D6CFE6',
    borderRadius: 6,
    height: 50,
    paddingHorizontal: 18,
    marginBottom: 20,
  },
  inputStyle: {
    flex: 1,
    fontSize: 14,
    fontWeight: '600',
    fontFamily: "Urbanist600"
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
    marginRight:18,
    marginBottom:12



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
    paddingTop: 28,
  },
  textStudent: {
    fontFamily: 'Urbanist',
    width: '100%',
    textAlign: 'center',
    fontSize: 18,
  },
});
import * as React from 'react';
import { StyleSheet, ScrollView, Pressable, Image, TextInput } from 'react-native';
import { Text, View } from '../components/Themed';
import { RootStackScreenProps } from '../types';

import { useFonts } from 'expo-font';
import BlackBack from "../assets/images/blackBack";
import Points from "../assets/images/points";
import Explore from "../assets/images/explore";
import Heart from "../assets/images/heart";
import Order from "../assets/images/order";
import Messages from "../assets/images/messages";
import Account from "../assets/images/account";
import Shaped from "../assets/images/shaped";

export default function Student33({navigation}: RootStackScreenProps<'NotFound'>) {
  let [fontsLoaded] = useFonts({
    'OpenSans400': require('../../../rn/AwesomeProject/assets/fonts/OpenSans-Regular.ttf'),
    'Urbanist700': require('../../../rn/AwesomeProject/assets/fonts/Urbanist-Bold.ttf'),
    'Urbanist800': require('../../../rn/AwesomeProject/assets/fonts/Urbanist-ExtraBold.ttf'),
    'Urbanist600': require('../../../rn/AwesomeProject/assets/fonts/Urbanist-Medium.ttf'),
    'Urbanist500': require('../../../rn/AwesomeProject/assets/fonts/Urbanist-Medium.ttf'),
    'Urbanist400': require('../../../rn/AwesomeProject/assets/fonts/Urbanist-Regular.ttf'),
    'OpenSans700': require('../../../rn/AwesomeProject/assets/fonts/OpenSansBold.ttf'),
    'OpenSans600': require('../../../rn/AwesomeProject/assets/fonts/OpenSans-Semibold.ttf'),


  });
  if (!fontsLoaded) {
    return <Text>error</Text>;
  }
  return (
    <View style={styles.mainWrapper}>
      <ScrollView>
        <View style={{
          borderTopRightRadius: 18,
          borderTopLeftRadius: 18,

        }}>

          <View style={{marginTop: 20, marginBottom: 12,
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 4,
            },
            shadowOpacity: 0.30,
            shadowRadius: 4.65,

            elevation: 8,
            padding: 18}}>
            <View style={{
              width: '100%',
              flexDirection: "row",
              justifyContent: "space-between",

              alignItems: 'center',

            }}>
              <View><BlackBack /></View>
              <View style={{flexDirection: "row", alignItems: 'center'}}>
                <View>
                  <Image
                    style={{width: 50, height: 50, marginRight: 20}}
                    source={require('../assets/images/Darya.png')}
                  />
                </View>
                <View>
                  <Text style={{fontFamily: 'Urbanist800', fontSize: 16}}>Darya Igorieva</Text>
                  <Text style={{fontFamily: 'OpenSans400', fontSize: 14, color:'#EB2D7C',marginTop:3}}>Online</Text>
                </View>
              </View>
              <View><Points /></View>
            </View>
          </View>
          <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center',marginTop:60}}>
            <View style={{borderWidth: 1, borderColor: '#D1C9E3', width: '50%'}} />
            <Text style={{color: '#D1C9E3', fontFamily: 'OpenSans400', marginHorizontal: 30,}}>06 November, 2019</Text>
            <View style={{borderWidth: 1, borderColor: '#D1C9E3', width: '50%'}} />
          </View>
          <View>
            <View style={{paddingHorizontal: 18, width: '100%', marginTop: 12}}>
              <View style={{width:'100%',alignItems:'flex-end'}}>
              <View style={{padding:12,borderRadius:12,borderBottomRightRadius:0,backgroundColor:'#D6CFE6',marginBottom:30}}>
                <Text>
                Hi Joy,{'\n'}{'\n'}

                I am looking for a tutor in {'\n'}english. I would like to take my{'\n'}lessons online.{'\n'}{'\n'}

                Are you available?
                </Text>
              </View>
              </View>
              <View style={{
                backgroundColor: '#543393',
                borderRadius: 12,
                paddingHorizontal: 20,
                paddingVertical: 12,
                borderBottomLeftRadius: 0,
                width:'75%'
              }}>
                <Text style={{lineHeight: 20, color: 'white'}}>I’ve created a booking request below, Maxim. Can you click to complete the booking?</Text>
              </View>
              <View style={{
                backgroundColor: '#543393',
                borderRadius: 12,
                paddingHorizontal: 20,
                paddingVertical: 12,
                borderTopLeftRadius: 0,
                width:'75%',
                marginTop:6,

              }}>
                <Text style={{textTransform:'uppercase',fontSize:12,fontFamily:'OpenSans400',color:'white'}}>Booking request</Text>
                <Text style={{lineHeight: 20, color: 'white',marginVertical:6,fontFamily:'OpenSans700'}}>Book a single lesson on {'\n'}Tuesday 14th Sep at 14:00 for 1 {'\n'}hour in English.</Text>

                <Pressable style={{backgroundColor:'#D6CFE6',borderRadius:6,paddingVertical:8,width:70,alignItems:'center',marginTop:6}}>
                  <Text style={{color:'#543393',fontFamily:'OpenSans400',fontSize:14}}>Book</Text>
                </Pressable>
              </View>
              <Text style={{marginBottom:80,marginTop:6,color:'#826D9B',fontFamily:'OpenSans400',fontSize:12}}>09:05</Text>
            </View>


          </View>
          <View style={{paddingHorizontal:18}}>
            <View style={{flexDirection: "row", alignItems: 'center'}}>


            </View>

          </View>
        </View>


      </ScrollView>
      <View
        style={{width: '100%', bottom: 0, position: 'absolute', alignItems: 'center',marginBottom:12}}>


        <View style={{flexDirection:'row',alignItems:'center',width:'100%',justifyContent:'center'}}>
          <View style={{width:50,height:50,shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,

            elevation: 5,
            alignItems:'center',
            justifyContent:'center',
            borderRadius:6
          }}>

            <Shaped/>
          </View>
          <View style={{shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,

            elevation: 5,
            width:268,
            height:50,
            justifyContent:'center',
            paddingLeft:20,
            borderRadius:6,
            marginLeft:12
          }}>
            <TextInput style={styles.inputStyle}
                       placeholder="Write a message"
                       placeholderTextColor="#90909D"
            />
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
    paddingHorizontal: 18
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
    fontSize: 14,
    fontFamily: "Urbanist500",


  },
  button: {
    marginBottom: 60,
    width: '50%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 18,
    paddingHorizontal: 32,
    borderRadius: 6,
    elevation: 3,
    backgroundColor: '#543393',
    color: 'white',
    marginLeft: 'auto',
    marginRight: 18


  },
  text: {
    color: 'white',
    fontSize: 14,

    fontFamily: 'Urbanist600'

  },
});
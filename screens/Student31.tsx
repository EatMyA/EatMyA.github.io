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
                    source={require('../assets/images/Avatar.png')}
                  />
                </View>
                <View>
                  <Text style={{fontFamily: 'Urbanist800', fontSize: 16}}>Edward Howell</Text>
                  <Text style={{fontFamily: 'OpenSans400', fontSize: 14, opacity: 0.5}}>was online at 10:36 am</Text>
                </View>
              </View>
              <View><Points /></View>
            </View>
          </View>
          <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center',marginTop:30}}>
            <View style={{borderWidth: 1, borderColor: '#D1C9E3', width: '50%'}} />
            <Text style={{color: '#D1C9E3', fontFamily: 'OpenSans400', marginHorizontal: 30,}}>Today</Text>
            <View style={{borderWidth: 1, borderColor: '#D1C9E3', width: '50%'}} />
          </View>
          <View>
            <View style={{paddingHorizontal: 18, width: '75%', marginTop: 12}}>
              <View style={{
                backgroundColor: '#543393',
                borderRadius: 12,
                paddingHorizontal: 20,
                paddingVertical: 12,
                borderBottomLeftRadius: 0
              }}>
                <Text style={{lineHeight: 20, color: 'white'}}>Good morning, I’ll glad to help {'\n'}you. Please,
                  describe in details {'\n'}the task for better lesson {'\n'}planning.</Text>
              </View>
            </View>
            <View style={{paddingHorizontal: 18, width: '75%', marginTop: 6}}>
              <View style={{
                backgroundColor: '#543393',
                borderRadius: 12,
                paddingHorizontal: 20,
                paddingVertical: 12,
                borderTopLeftRadius: 0
              }}>
                <Text style={{lineHeight: 20, color: 'white'}}>Cost of the first lesson £10/{'\n'}hour</Text>
                <View style={{alignItems: 'flex-end', justifyContent: 'flex-end', backgroundColor: 'transparent'}}>
                  <Text style={{color: '#9986BF', fontFamily: 'OpenSans400'}}>09:31am</Text>
                </View>
              </View>
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
        <View style={{flexDirection: "row", alignItems: 'center',marginBottom:16}}>
          <View style={{borderRadius: 100, backgroundColor: '#EF5DA8', paddingVertical: 12,paddingHorizontal:35}}>
            <Text style={{color:'white',fontFamily:'OpenSans600',fontSize:14}}>Deny</Text>
          </View>
          <View style={{borderRadius: 100, backgroundColor: '#EF5DA8', padding: 12,paddingHorizontal:54,marginLeft:16}}>
            <Text style={{color:'white',fontFamily:'OpenSans600',fontSize:14}}>Select that tutor</Text>
          </View>
        </View>

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
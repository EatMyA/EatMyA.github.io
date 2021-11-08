import * as React from 'react';
import { StyleSheet, TextInput, ScrollView, TouchableOpacity, } from 'react-native';
import { Text, View } from '../components/Themed';
import { RootStackScreenProps } from '../types';

import { useFonts } from 'expo-font';
import Magnifier from "../assets/images/magnifier";
import Mathematics from "../assets/images/Mathematics";
import EnglishLan from "../assets/images/englishLan";
import Physics from "../assets/images/physics";
import Biology from "../assets/images/biology";
import ComputerSc from "../assets/images/ComputerSc";
import Back from "../assets/images/back";
import Heart from "../assets/images/heart";
import Order from "../assets/images/order";
import Messages from "../assets/images/messages";
import Account from "../assets/images/account";
import Cancel from "../assets/images/cancel";
import Explore from "../assets/images/explore";
import AcousticGu from "../assets/images/acousticGu";
import History from "../assets/images/history";
import { useState } from "react";


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
  // const [hover, setHover] = useState(-1);
  // const hoverColor = '#D6CFE6';
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
          <View>
            <View style={styles.inputs}>
              <Magnifier style={{marginRight: 12}} />
              <TextInput style={styles.inputStyle}
                         placeholder="Find a service or expert"
                         placeholderTextColor="rgba(30, 32, 34, 0.5)"
              />
            </View>
          </View>
        </View>
        <View>

          <Text style={{textTransform: "uppercase", fontFamily: 'Urbanist700', fontSize: 12, marginBottom: 20,paddingHorizontal: 18,}}>
            Popular subjets
          </Text>

          <TouchableOpacity onPress={() => {
            console.log(hover);

            if (hover == 1) {
              setHover(-1)
            }else{
              setHover(1)
            }
          }
          }>
            <View  style={{
              flexDirection: "row",
              alignItems: "center",
              marginBottom: 12,
              backgroundColor: hover == 1 ? hoverColor : 'white',
              paddingHorizontal: 18,
              paddingVertical: 6,
            }}>


              <View style={{
                width: 70, height: 70, shadowColor: "#000",
                shadowOffset: {
                  width: 0,
                  height: 2,
                },
                shadowOpacity: 0.25,
                shadowRadius: 3.84,

                elevation: 5,
                alignItems: 'center', justifyContent: 'center',
                borderRadius: 6

              }}>

                <EnglishLan />
              </View>
              <Text style={{fontFamily: 'Urbanist600', fontSize: 16, marginLeft: 20}}>English language </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {
            console.log(hover);

            if (hover == 2) {
              setHover(-1)
            }else{
              setHover(2)
            }
          }
          }>
            <View  style={{
              flexDirection: "row",
              alignItems: "center",
              marginBottom: 12,
              backgroundColor: hover == 2 ? hoverColor : 'white',
              paddingHorizontal: 18,
              paddingVertical: 6,
            }}>


              <View style={{
                width: 70, height: 70, shadowColor: "#000",
                shadowOffset: {
                  width: 0,
                  height: 2,
                },
                shadowOpacity: 0.25,
                shadowRadius: 3.84,

                elevation: 5,
                alignItems: 'center', justifyContent: 'center',
                borderRadius: 6

              }}>

                <Physics />
              </View>
              <Text style={{fontFamily: 'Urbanist600', fontSize: 16, marginLeft: 20}}>Physics</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {
            console.log(hover);

            if (hover == 3) {
              setHover(-1)
            }else{
              setHover(3)
            }
          }
          }>
            <View  style={{
              flexDirection: "row",
              alignItems: "center",
              marginBottom: 12,
              backgroundColor: hover == 3 ? hoverColor : 'white',
              paddingHorizontal: 18,
              paddingVertical: 6,
            }}>


              <View style={{
                width: 70, height: 70, shadowColor: "#000",
                shadowOffset: {
                  width: 0,
                  height: 2,
                },
                shadowOpacity: 0.25,
                shadowRadius: 3.84,

                elevation: 5,
                alignItems: 'center', justifyContent: 'center',
                borderRadius: 6

              }}>

                <Biology />
              </View>
              <Text style={{fontFamily: 'Urbanist600', fontSize: 16, marginLeft: 20}}>Biology</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {
            console.log(hover);

            if (hover == 4) {
              setHover(-1)
            }else{
              setHover(4)
            }
          }
          }>
            <View  style={{
              flexDirection: "row",
              alignItems: "center",
              marginBottom: 12,
              backgroundColor: hover == 4 ? hoverColor : 'white',
              paddingHorizontal: 18,
              paddingVertical: 6,
            }}>


              <View style={{
                width: 70, height: 70, shadowColor: "#000",
                shadowOffset: {
                  width: 0,
                  height: 2,
                },
                shadowOpacity: 0.25,
                shadowRadius: 3.84,

                elevation: 5,
                alignItems: 'center', justifyContent: 'center',
                borderRadius: 6

              }}>

                <ComputerSc />
              </View>
              <Text style={{fontFamily: 'Urbanist600', fontSize: 16, marginLeft: 20}}>Computer Science</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {
            console.log(hover);

            if (hover == 5) {
              setHover(-1)
            }else{
              setHover(5)
            }
          }
          }>
            <View  style={{
              flexDirection: "row",
              alignItems: "center",
              marginBottom: 12,
              backgroundColor: hover == 5 ? hoverColor : 'white',
              paddingHorizontal: 18,
              paddingVertical: 6,
            }}>


              <View style={{
                width: 70, height: 70, shadowColor: "#000",
                shadowOffset: {
                  width: 0,
                  height: 2,
                },
                shadowOpacity: 0.25,
                shadowRadius: 3.84,

                elevation: 5,
                alignItems: 'center', justifyContent: 'center',
                borderRadius: 6

              }}>

                <AcousticGu />
              </View>
              <Text style={{fontFamily: 'Urbanist600', fontSize: 16, marginLeft: 20}}>Acoustic Guitar</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {
            console.log(hover);

            if (hover == 6) {
              setHover(-1)
            }else{
              setHover(6)
            }
          }
          }>
            <View  style={{
              flexDirection: "row",
              alignItems: "center",
              marginBottom: 60,
              backgroundColor: hover == 6 ? hoverColor : 'white',
              paddingHorizontal: 18,
              paddingVertical: 6,
            }}>


              <View style={{
                width: 70, height: 70, shadowColor: "#000",
                shadowOffset: {
                  width: 0,
                  height: 2,
                },
                shadowOpacity: 0.25,
                shadowRadius: 3.84,

                elevation: 5,
                alignItems: 'center', justifyContent: 'center',
                borderRadius: 6,

              }}>

                <History />
              </View>
              <Text style={{fontFamily: 'Urbanist600', fontSize: 16, marginLeft: 20}}>History</Text>
            </View>
          </TouchableOpacity>
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
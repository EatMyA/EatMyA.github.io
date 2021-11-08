import * as React from 'react';
import { StyleSheet, TextInput, ScrollView, TouchableOpacity } from 'react-native';
import { Text, View } from '../components/Themed';
import { RootStackScreenProps } from '../types';

import { useFonts } from 'expo-font';
import Magnifier from "../assets/images/magnifier";
import Mathematics from "../assets/images/Mathematics";
import EnglishLan from "../assets/images/englishLan";
import Physics from "../assets/images/physics";
import Biology from "../assets/images/biology";
import ComputerSc from "../assets/images/ComputerSc";
import AcousticGu from "../assets/images/acousticGu";
import History from "../assets/images/history";
import { useState } from "react";


export default function TabOneScreen({navigation}: RootStackScreenProps<'NotFound'>) {
  let [fontsLoaded] = useFonts({
    'OpenSans400': require('../../../rn/AwesomeProject/assets/fonts/OpenSans-Regular.ttf'),
    'Urbanist700': require('../../../rn/AwesomeProject/assets/fonts/Urbanist-Bold.ttf'),
    'Urbanist800': require('../../../rn/AwesomeProject/assets/fonts/Urbanist-Bold.ttf'),
    'Urbanist600': require('../../../rn/AwesomeProject/assets/fonts/Urbanist-Bold.ttf'),


  });
  if (!fontsLoaded) {
    return <Text>error</Text>;
  }
  const hoverColor = '#D6CFE6';
  return (
    <ScrollView style={styles.mainWrapper}>
      <View style={styles.container}>
        <View style={{alignItems: 'center', marginTop: 12, marginBottom: 20}}>
          <View style={{height: 5, width: 50, backgroundColor: '#20203A', opacity: 0.3, borderRadius: '100px'}}/>
        </View>
        <View style={{paddingHorizontal: 18}}>

          <View style={styles.inputs}>
            <View>
              <Magnifier style={{marginRight: 12}}/>
            </View>
            <TextInput style={styles.inputStyle}
                       placeholder="Find a service or expert"
                       placeholderTextColor="rgba(30, 32, 34, 0.5)"
            />
          </View>


        </View>
        <View>
          <Text style={{
            textTransform: "uppercase",
            fontFamily: 'Urbanist700',
            fontSize: 12,
            marginBottom: 20,
            paddingHorizontal: 18,
          }}>
            Popular subjets
          </Text>
          {/*<TouchableOpacity onPress={() => {*/}
          {/*  console.log(hover);*/}

          {/*  if (hover == 1) {*/}
          {/*    setHover(-1)*/}
          {/*  }else{*/}
          {/*    setHover(1)*/}
          {/*  }*/}
          {/*}*/}
          {/*}>*/}
          {/*  <View  style={{*/}
          {/*    flexDirection: "row",*/}
          {/*    alignItems: "center",*/}
          {/*    marginBottom: 12,*/}
          {/*    backgroundColor: hover == 1 ? hoverColor : 'white',*/}
          {/*    paddingHorizontal: 18,*/}
          {/*    paddingVertical: 6,*/}
          {/*  }}>*/}


          {/*    <View style={{*/}
          {/*      width: 70, height: 70, shadowColor: "#000",*/}
          {/*      shadowOffset: {*/}
          {/*        width: 0,*/}
          {/*        height: 2,*/}
          {/*      },*/}
          {/*      shadowOpacity: 0.25,*/}
          {/*      shadowRadius: 3.84,*/}

          {/*      elevation: 5,*/}
          {/*      alignItems: 'center', justifyContent: 'center',*/}
          {/*      borderRadius: 6*/}

          {/*    }}>*/}

          {/*      <Mathematics />*/}
          {/*    </View>*/}
          {/*    <Text style={{fontFamily: 'Urbanist600', fontSize: 16, marginLeft: 20}}>Mathematics</Text>*/}
          {/*  </View>*/}
          {/*</TouchableOpacity>*/}
          {/*<TouchableOpacity onPress={() => {*/}
          {/*  console.log(hover);*/}

          {/*  if (hover == 1) {*/}
          {/*    setHover(-1)*/}
          {/*  }else{*/}
          {/*    setHover(1)*/}
          {/*  }*/}
          {/*}*/}
          {/*}>*/}
          {/*  <View  style={{*/}
          {/*    flexDirection: "row",*/}
          {/*    alignItems: "center",*/}
          {/*    marginBottom: 12,*/}
          {/*    backgroundColor: hover == 1 ? hoverColor : 'white',*/}
          {/*    paddingHorizontal: 18,*/}
          {/*    paddingVertical: 6,*/}
          {/*  }}>*/}


          {/*    <View style={{*/}
          {/*      width: 70, height: 70, shadowColor: "#000",*/}
          {/*      shadowOffset: {*/}
          {/*        width: 0,*/}
          {/*        height: 2,*/}
          {/*      },*/}
          {/*      shadowOpacity: 0.25,*/}
          {/*      shadowRadius: 3.84,*/}

          {/*      elevation: 5,*/}
          {/*      alignItems: 'center', justifyContent: 'center',*/}
          {/*      borderRadius: 6*/}

          {/*    }}>*/}

          {/*      <EnglishLan />*/}
          {/*    </View>*/}
          {/*    <Text style={{fontFamily: 'Urbanist600', fontSize: 16, marginLeft: 20}}>English language </Text>*/}
          {/*  </View>*/}
          {/*</TouchableOpacity>*/}
          {/*<TouchableOpacity onPress={() => {*/}
          {/*  console.log(hover);*/}

          {/*  if (hover == 1) {*/}
          {/*    setHover(-1)*/}
          {/*  }else{*/}
          {/*    setHover(1)*/}
          {/*  }*/}
          {/*}*/}
          {/*}>*/}
          {/*  <View  style={{*/}
          {/*    flexDirection: "row",*/}
          {/*    alignItems: "center",*/}
          {/*    marginBottom: 12,*/}
          {/*    backgroundColor: hover == 1 ? hoverColor : 'white',*/}
          {/*    paddingHorizontal: 18,*/}
          {/*    paddingVertical: 6,*/}
          {/*  }}>*/}


          {/*    <View style={{*/}
          {/*      width: 70, height: 70, shadowColor: "#000",*/}
          {/*      shadowOffset: {*/}
          {/*        width: 0,*/}
          {/*        height: 2,*/}
          {/*      },*/}
          {/*      shadowOpacity: 0.25,*/}
          {/*      shadowRadius: 3.84,*/}

          {/*      elevation: 5,*/}
          {/*      alignItems: 'center', justifyContent: 'center',*/}
          {/*      borderRadius: 6*/}

          {/*    }}>*/}

          {/*      <Physics />*/}
          {/*    </View>*/}
          {/*    <Text style={{fontFamily: 'Urbanist600', fontSize: 16, marginLeft: 20}}>Physics</Text>*/}
          {/*  </View>*/}
          {/*</TouchableOpacity>*/}
          {/*<TouchableOpacity onPress={() => {*/}
          {/*  console.log(hover);*/}

          {/*  if (hover == 1) {*/}
          {/*    setHover(-1)*/}
          {/*  }else{*/}
          {/*    setHover(1)*/}
          {/*  }*/}
          {/*}*/}
          {/*}>*/}
          {/*  <View  style={{*/}
          {/*    flexDirection: "row",*/}
          {/*    alignItems: "center",*/}
          {/*    marginBottom: 12,*/}
          {/*    backgroundColor: hover == 1 ? hoverColor : 'white',*/}
          {/*    paddingHorizontal: 18,*/}
          {/*    paddingVertical: 6,*/}
          {/*  }}>*/}


          {/*    <View style={{*/}
          {/*      width: 70, height: 70, shadowColor: "#000",*/}
          {/*      shadowOffset: {*/}
          {/*        width: 0,*/}
          {/*        height: 2,*/}
          {/*      },*/}
          {/*      shadowOpacity: 0.25,*/}
          {/*      shadowRadius: 3.84,*/}

          {/*      elevation: 5,*/}
          {/*      alignItems: 'center', justifyContent: 'center',*/}
          {/*      borderRadius: 6*/}

          {/*    }}>*/}

          {/*      <Biology />*/}
          {/*    </View>*/}
          {/*    <Text style={{fontFamily: 'Urbanist600', fontSize: 16, marginLeft: 20}}>Biology</Text>*/}
          {/*  </View>*/}
          {/*</TouchableOpacity>*/}
          {/*<TouchableOpacity onPress={() => {*/}
          {/*  console.log(hover);*/}

          {/*  if (hover == 1) {*/}
          {/*    setHover(-1)*/}
          {/*  }else{*/}
          {/*    setHover(1)*/}
          {/*  }*/}
          {/*}*/}
          {/*}>*/}
          {/*  <View  style={{*/}
          {/*    flexDirection: "row",*/}
          {/*    alignItems: "center",*/}
          {/*    marginBottom: 12,*/}
          {/*    backgroundColor: hover == 1 ? hoverColor : 'white',*/}
          {/*    paddingHorizontal: 18,*/}
          {/*    paddingVertical: 6,*/}
          {/*  }}>*/}


          {/*    <View style={{*/}
          {/*      width: 70, height: 70, shadowColor: "#000",*/}
          {/*      shadowOffset: {*/}
          {/*        width: 0,*/}
          {/*        height: 2,*/}
          {/*      },*/}
          {/*      shadowOpacity: 0.25,*/}
          {/*      shadowRadius: 3.84,*/}

          {/*      elevation: 5,*/}
          {/*      alignItems: 'center', justifyContent: 'center',*/}
          {/*      borderRadius: 6*/}

          {/*    }}>*/}

          {/*      <ComputerSc />*/}
          {/*    </View>*/}
          {/*    <Text style={{fontFamily: 'Urbanist600', fontSize: 16, marginLeft: 20}}>Computer Science</Text>*/}
          {/*  </View>*/}
          {/*</TouchableOpacity>*/}
          {/*<TouchableOpacity onPress={() => {*/}
          {/*  console.log(hover);*/}

          {/*  if (hover == 1) {*/}
          {/*    setHover(-1)*/}
          {/*  }else{*/}
          {/*    setHover(1)*/}
          {/*  }*/}
          {/*}*/}
          {/*}>*/}
          {/*  <View  style={{*/}
          {/*    flexDirection: "row",*/}
          {/*    alignItems: "center",*/}
          {/*    marginBottom: 12,*/}
          {/*    backgroundColor: hover == 1 ? hoverColor : 'white',*/}
          {/*    paddingHorizontal: 18,*/}
          {/*    paddingVertical: 6,*/}
          {/*  }}>*/}


          {/*    <View style={{*/}
          {/*      width: 70, height: 70, shadowColor: "#000",*/}
          {/*      shadowOffset: {*/}
          {/*        width: 0,*/}
          {/*        height: 2,*/}
          {/*      },*/}
          {/*      shadowOpacity: 0.25,*/}
          {/*      shadowRadius: 3.84,*/}

          {/*      elevation: 5,*/}
          {/*      alignItems: 'center', justifyContent: 'center',*/}
          {/*      borderRadius: 6*/}

          {/*    }}>*/}

          {/*      <AcousticGu />*/}
          {/*    </View>*/}
          {/*    <Text style={{fontFamily: 'Urbanist600', fontSize: 16, marginLeft: 20}}>Acoustic Guitar</Text>*/}
          {/*  </View>*/}
          {/*</TouchableOpacity>*/}
          {/*<TouchableOpacity onPress={() => {*/}
          {/*  console.log(hover);*/}

          {/*  if (hover == 1) {*/}
          {/*    setHover(-1)*/}
          {/*  }else{*/}
          {/*    setHover(1)*/}
          {/*  }*/}
          {/*}*/}
          {/*}>*/}
          {/*  <View  style={{*/}
          {/*    flexDirection: "row",*/}
          {/*    alignItems: "center",*/}
          {/*    marginBottom: 12,*/}
          {/*    backgroundColor: hover == 1 ? hoverColor : 'white',*/}
          {/*    paddingHorizontal: 18,*/}
          {/*    paddingVertical: 6,*/}
          {/*  }}>*/}


          {/*    <View style={{*/}
          {/*      width: 70, height: 70, shadowColor: "#000",*/}
          {/*      shadowOffset: {*/}
          {/*        width: 0,*/}
          {/*        height: 2,*/}
          {/*      },*/}
          {/*      shadowOpacity: 0.25,*/}
          {/*      shadowRadius: 3.84,*/}

          {/*      elevation: 5,*/}
          {/*      alignItems: 'center', justifyContent: 'center',*/}
          {/*      borderRadius: 6*/}

          {/*    }}>*/}

          {/*      <History />*/}
          {/*    </View>*/}
          {/*    <Text style={{fontFamily: 'Urbanist600', fontSize: 16, marginLeft: 20}}>History</Text>*/}
          {/*  </View>*/}
          {/*</TouchableOpacity>*/}
        </View>

      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  mainWrapper: {
    overflow: "hidden",
    height: '100%',
    backgroundColor: 'white'
  },
  container: {
    borderTopRightRadius: 18,
    borderTopLeftRadius: 18,
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
    fontFamily: "OpenSans400"
  },

});
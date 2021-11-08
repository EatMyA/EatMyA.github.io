import * as React from 'react';
import { StyleSheet, Image, ScrollView, Pressable, TouchableOpacity } from 'react-native';
import { Text, View } from '../components/Themed';
import { RootStackScreenProps } from '../types';

import { useFonts } from 'expo-font';
import Explore from "../assets/images/explore";
import Heart from "../assets/images/heart";
import Order from "../assets/images/order";
import Messages from "../assets/images/messages";
import Account from "../assets/images/account";
import WhitePlus from "../assets/images/whitePlus";
import { useState } from "react";
import Rocket from "../assets/images/rocket";
import PinkAccept from "../assets/images/pinkAccept";





export default function Student32({navigation}: RootStackScreenProps<'NotFound'>) {
  const [hover, setHover] = useState(-1);
  const hoverColor = '#FEF2F7';
  let [fontsLoaded] = useFonts({
    'OpenSans400': require('../../../rn/AwesomeProject/assets/fonts/OpenSans-Regular.ttf'),
    'Urbanist700': require('../../../rn/AwesomeProject/assets/fonts/Urbanist-Bold.ttf'),
    'Urbanist800': require('../../../rn/AwesomeProject/assets/fonts/Urbanist-ExtraBold.ttf'),
    'Urbanist600': require('../../../rn/AwesomeProject/assets/fonts/Urbanist-SemiBold.ttf'),
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
          <View style={{ marginTop:30}}>
            <View>
              <Text style={{ fontFamily: 'Urbanist700', fontSize: 24}}>Messages</Text>

            </View>


          </View>

        </View>

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
              backgroundColor: hover == 1 ? hoverColor : 'white',
              paddingHorizontal: 18,
              paddingVertical: 16,
            }}>


              <View style={{
                width: 50, height: 50, backgroundColor:'#EF5DA8',
                alignItems: 'center', justifyContent: 'center',
                borderRadius: 100

              }}>
              <Rocket/>

              </View>
              <View style={{backgroundColor:'transparent',flexDirection:'row'}}>
              <View style={{marginLeft: 20,backgroundColor:'transparent'}}>
              <View style={{flexDirection:'row',alignItems:'center',backgroundColor:'transparent'}}>
              <Text style={{fontFamily: 'Urbanist700', fontSize: 16,}}>Virtual Support</Text>
              <PinkAccept style={{marginLeft:8}}/>
              </View>
                <Text style={{fontFamily:'OpenSans400',fontSize:12}}>My teaching style and lessons tend to {'\n'}be
                  focused around exam que...</Text>
              </View>
                <View style={{flexDirection:"row",backgroundColor:'transparent'}}>

                  <View style={{alignItems:'center',marginLeft:12,backgroundColor:'transparent'}}>
                  <Text style={{fontFamily:'OpenSans500',fontSize:14}}>10:30</Text>
                    <View style={{backgroundColor:'#EB2D7C',paddingHorizontal:16,borderRadius:100,paddingVertical:3,marginTop:4}}>
                      <Text style={{fontFamily:'OpenSans400',fontSize:12,color:'white'}}>1</Text>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        <View style={{borderWidth: 1, borderColor: '#D6CFE6',width:'100%'}}/>
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
            backgroundColor: hover == 2 ? hoverColor : 'white',
            paddingHorizontal: 18,
            paddingVertical: 16,
          }}>


            <View style={{
              width: 50, height: 50,
              alignItems: 'center', justifyContent: 'center',
              borderRadius: 100

            }}>
              <Image
                     source={require('../assets/images/Darya.png')}
              />

            </View>
            <View style={{backgroundColor:'transparent',flexDirection:'row'}}>
              <View style={{marginLeft: 20,backgroundColor:'transparent'}}>
                <View style={{flexDirection:'row',alignItems:'center',backgroundColor:'transparent'}}>
                  <Text style={{fontFamily: 'Urbanist700', fontSize: 16,}}>Darya Igorieva</Text>
                </View>
                <Text style={{fontFamily:'OpenSans400',fontSize:12}}>My teaching style and lessons tend to {'\n'}be focused around exam que...</Text>
              </View>
              <View style={{flexDirection:"row",backgroundColor:'transparent'}}>

                <View style={{alignItems:'center',marginLeft:12,backgroundColor:'transparent'}}>
                  <Text style={{fontFamily:'OpenSans500',fontSize:14}}>10:30</Text>
                  <View style={{backgroundColor:'#EB2D7C',paddingHorizontal:16,borderRadius:100,paddingVertical:3,marginTop:4}}>
                    <Text style={{fontFamily:'OpenSans400',fontSize:12,color:'white'}}>1</Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </TouchableOpacity>
        <View style={{borderWidth: 1, borderColor: '#D6CFE6',width:'100%'}}/>
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
            backgroundColor: hover == 3 ? hoverColor : 'white',
            paddingHorizontal: 18,
            paddingVertical: 16,
          }}>


            <View style={{
              width: 50, height: 50,
              alignItems: 'center', justifyContent: 'center',
              borderRadius: 100

            }}>
              <Image
                source={require('../assets/images/Emily.png')}
              />

            </View>
            <View style={{backgroundColor:'transparent',flexDirection:'row'}}>
              <View style={{marginLeft: 20,backgroundColor:'transparent'}}>
                <View style={{flexDirection:'row',alignItems:'center',backgroundColor:'transparent'}}>
                  <Text style={{fontFamily: 'Urbanist700', fontSize: 16,}}>Emily M.</Text>
                </View>
                <Text style={{fontFamily:'OpenSans400',fontSize:12}}>My teaching style and lessons tend to {'\n'}be focused around exam que...</Text>
              </View>
              <View style={{flexDirection:"row",backgroundColor:'transparent'}}>

                <View style={{alignItems:'center',marginLeft:12,backgroundColor:'transparent'}}>
                  <Text style={{fontFamily:'OpenSans500',fontSize:14}}>10:30</Text>
                  <View style={{backgroundColor:'#EB2D7C',paddingHorizontal:16,borderRadius:100,paddingVertical:3,marginTop:4}}>
                    <Text style={{fontFamily:'OpenSans400',fontSize:12,color:'white'}}>2</Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </TouchableOpacity>
        <View style={{borderWidth: 1, borderColor: '#D6CFE6',width:'100%'}}/>
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
            backgroundColor: hover == 4 ? hoverColor : 'white',
            paddingHorizontal: 18,
            paddingVertical: 16,
          }}>


            <View style={{
              width: 50, height: 50,
              alignItems: 'center', justifyContent: 'center',
              borderRadius: 100

            }}>
              <Image
                source={require('../assets/images/EmilySecond.png')}
              />

            </View>
            <View style={{backgroundColor:'transparent',flexDirection:'row'}}>
              <View style={{marginLeft: 20,backgroundColor:'transparent'}}>
                <View style={{flexDirection:'row',alignItems:'center',backgroundColor:'transparent'}}>
                  <Text style={{fontFamily: 'Urbanist700', fontSize: 16,}}>Emily M.</Text>
                </View>
                <Text style={{fontFamily:'OpenSans400',fontSize:12}}>My teaching style and lessons tend to {'\n'}be focused around exam que...</Text>
              </View>
              <View style={{flexDirection:"row",backgroundColor:'transparent'}}>

                <View style={{alignItems:'center',marginLeft:12,backgroundColor:'transparent'}}>
                  <Text style={{fontFamily:'OpenSans500',fontSize:14}}>10:30</Text>
                  <View style={{backgroundColor:'#EB2D7C',borderRadius:100,height:11,width:11,marginTop:10}}>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </TouchableOpacity>
        <View style={{borderWidth: 1, borderColor: '#D6CFE6',width:'100%'}}/>
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
            backgroundColor: hover == 5 ? hoverColor : 'white',
            paddingHorizontal: 18,
            paddingVertical: 16,
          }}>


            <View style={{
              width: 50, height: 50,
              alignItems: 'center', justifyContent: 'center',
              borderRadius: 100

            }}>
              <Image
                source={require('../assets/images/EmilyThird.png')}
              />

            </View>
            <View style={{backgroundColor:'transparent',flexDirection:'row'}}>
              <View style={{marginLeft: 20,backgroundColor:'transparent'}}>
                <View style={{flexDirection:'row',alignItems:'center',backgroundColor:'transparent'}}>
                  <Text style={{fontFamily: 'Urbanist700', fontSize: 16,}}>Emily M.</Text>
                </View>
                <Text style={{fontFamily:'OpenSans400',fontSize:12}}>My teaching style and lessons tend to {'\n'}be focused around exam que...</Text>
              </View>
              <View style={{flexDirection:"row",backgroundColor:'transparent'}}>

                <View style={{alignItems:'center',marginLeft:12,backgroundColor:'transparent'}}>
                  <Text style={{fontFamily:'OpenSans500',fontSize:14}}>10:30</Text>

                </View>
              </View>
            </View>
          </View>
        </TouchableOpacity>
        <View style={{borderWidth: 1, borderColor: '#D6CFE6',width:'100%'}}/>
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
            backgroundColor: hover == 6 ? hoverColor : 'white',
            paddingHorizontal: 18,
            paddingVertical: 16,
            marginBottom:70
          }}>


            <View style={{
              width: 50, height: 50,
              alignItems: 'center', justifyContent: 'center',
              borderRadius: 100

            }}>
              <Image
                source={require('../assets/images/EmilyFourth.png')}
              />

            </View>
            <View style={{backgroundColor:'transparent',flexDirection:'row'}}>
              <View style={{marginLeft: 20,backgroundColor:'transparent'}}>
                <View style={{flexDirection:'row',alignItems:'center',backgroundColor:'transparent'}}>
                  <Text style={{fontFamily: 'Urbanist700', fontSize: 16,}}>Emily M.</Text>
                </View>
                <Text style={{fontFamily:'OpenSans400',fontSize:12}}>My teaching style and lessons tend to {'\n'}be focused around exam que...</Text>
              </View>
              <View style={{flexDirection:"row",backgroundColor:'transparent'}}>

                <View style={{alignItems:'center',marginLeft:12,backgroundColor:'transparent'}}>
                  <Text style={{fontFamily:'OpenSans500',fontSize:14}}>10:30</Text>

                </View>
              </View>
            </View>
          </View>
        </TouchableOpacity>
        <View style={{alignItems:"flex-end",marginTop:100}}>

          </View>

      </View>
    </ScrollView>
        <View style={{width:'100%',bottom:0,position:'absolute',alignItems:'center',marginBottom:16}}>
          <View style={{paddingHorizontal:18,width:'100%'}}>
          <Pressable style={styles.button}>
            <Text style={styles.text}>Create order</Text>
            <WhitePlus style={{marginLeft:12}}/>
          </Pressable>
          </View>
          <View style={{borderWidth: 1, borderColor: '#F2F0F5',marginVertical:12,width:'100%'}}/>
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
  );
}

const styles = StyleSheet.create({
  mainWrapper: {
    overflow: "hidden",
    height: '100%',
    backgroundColor: 'white'
  },
  container: {
    marginBottom: 16,
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
    flexDirection:'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 18,
    width:'100%',
    borderRadius: 6,

    backgroundColor: '#543393',
    color: 'white',
    marginBottom:20


  },
  text: {
    color: 'white',
    fontSize: 16,

    fontFamily: 'Urbanist600'

  },
});
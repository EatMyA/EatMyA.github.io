import * as React from 'react';
import { StyleSheet, ScrollView, Pressable, Image } from 'react-native';
import { Text, View } from '../components/Themed';
import { RootStackScreenProps } from '../types';

import { useFonts } from 'expo-font';
import Back from "../assets/images/back";
import Points from "../assets/images/points";
import Explore from "../assets/images/explore";
import Heart from "../assets/images/heart";
import Order from "../assets/images/order";
import Messages from "../assets/images/messages";
import Account from "../assets/images/account";
import Loupe from "../assets/images/loupe";

export default function Student29({navigation}: RootStackScreenProps<'NotFound'>) {
  let [fontsLoaded] = useFonts({
    'OpenSans400': require('../../../rn/AwesomeProject/assets/fonts/OpenSans-Regular.ttf'),
    'Urbanist700': require('../../../rn/AwesomeProject/assets/fonts/Urbanist-Bold.ttf'),
    'Urbanist800': require('../../../rn/AwesomeProject/assets/fonts/Urbanist-ExtraBold.ttf'),
    'Urbanist600': require('../../../rn/AwesomeProject/assets/fonts/Urbanist-Medium.ttf'),
    'Urbanist500': require('../../../rn/AwesomeProject/assets/fonts/Urbanist-Medium.ttf'),
    'Urbanist400': require('../../../rn/AwesomeProject/assets/fonts/Urbanist-Regular.ttf'),
    'OpenSans700': require('../../../rn/AwesomeProject/assets/fonts/OpenSansBold.ttf'),


  });
  if (!fontsLoaded) {
    return <Text>error</Text>;
  }
  return (
    <View style={styles.mainWrapper}>
      <ScrollView >
        <View style={{
          borderTopRightRadius: 18,
          borderTopLeftRadius: 18,
        }}>
          <View style={styles.container}>
            <View style={{ marginTop: 12, marginBottom: 20}}>
              <View style={{overflow: "hidden",
                width: '100%',
                flexDirection: "row",
                justifyContent: "center",
                marginBottom: 30,
                marginTop: 3,
                paddingHorizontal:20,
                paddingTop:20}}>
                <View ><Back /></View>
                <Text style={{textAlign: 'center',width: '100%', fontFamily: 'Urbanist700', fontSize: 18}}>Order</Text>
                <View><Points /></View>
              </View>

              <Text style={{ fontFamily: 'Urbanist700', fontSize: 24}}>English language</Text>
              <View style={{flexDirection:'row',alignItems:'center',marginVertical:16}}>
                <View style={{width:8,height:8,backgroundColor:'#0A84FF',borderRadius:100,marginRight:8}}/>
              <Text style={{ fontFamily: 'Urbanist500', fontSize: 16}}>Order is open for feedback</Text>
              </View>
              <Text style={{textAlign:'center',fontFamily: 'Urbanist500', fontSize: 16,opacity:0.5,marginBottom:20}}>You have 17 feedbacks from tutors</Text>
            </View>
          </View>
            <View>

              <View style={{shadowColor: "#000",
                shadowOffset: {
                  width: 0,
                  height: 2,
                },
                shadowOpacity: 0.25,
                shadowRadius: 3.84,

                elevation: 5,
                paddingHorizontal:18,
                paddingVertical:16
              }}>
                <View style={{flexDirection:"row",alignItems:'center'}}>
                  <View style={{marginRight:12}}>
                    <Image style={{width: 72, height: 72, borderRadius: 100}}
                           source={require('../assets/images/bigFirstPeople.png')}
                    />
                  </View>
                  <View>
                    <Text style={{fontFamily: 'Urbanist700', fontSize: 18}}>Tyler Nyx</Text>
                    <View style={{flexDirection:'row'}}>
                      <Text>My teaching style and lessons tend {'\n'}to be focused around exam...</Text>
                      <View style={{width:22,height:22,backgroundColor:'#EB2D7C',borderRadius:100,marginRight:8,alignItems:'center',justifyContent:'center',marginLeft:6}}>
                        <Text style={{color:'white',fontFamily:'OpenSans400'}}>1</Text>
                      </View>

                    </View>
                  </View>

                </View>
                <View style={{flexDirection:'row',alignItems:'center',justifyContent:'center',marginTop:12,}}>
                  <View style={{marginRight:12}}>
                    <Text style={{fontFamily:'OpenSans700',fontSize:14,color:'#EB2D7C',textAlign:'center'}}>£25</Text>
                    <Text style={{fontSize:12,fontFamily:'Urbanist400',textAlign:'center'}}>per hour</Text>
                  </View>
                  <View style={{marginHorizontal:12}}>
                    <Text style={{fontFamily:'OpenSans700',fontSize:14,color:'#EB2D7C',textAlign:'center'}}>124</Text>
                    <Text style={{fontSize:12,fontFamily:'Urbanist400',textAlign:'center'}}>hours taught</Text>
                  </View>
                  <View style={{marginLeft:12}}>
                    <Text style={{fontFamily:'OpenSans700',fontSize:14,color:'#EB2D7C',textAlign:'center'}}>5++</Text>
                    <Text style={{fontSize:12,fontFamily:'Urbanist400',textAlign:'center'}}>tutor rating</Text>
                  </View>
                </View>
              </View>
            </View>
          <View style={{borderWidth:1,borderColor:'#D1C9E3'}}/>
          <View>

            <View style={{shadowColor: "#000",
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.25,
              shadowRadius: 3.84,

              elevation: 5,
              paddingHorizontal:18,
              paddingVertical:16
            }}>
              <View style={{flexDirection:"row",alignItems:'center'}}>
                <View style={{marginRight:12}}>
                  <Image style={{width: 72, height: 72, borderRadius: 100}}
                         source={require('../assets/images/bigSecondPeople.png')}
                  />
                </View>
                <View>
                  <Text style={{fontFamily: 'Urbanist700', fontSize: 18}}>Edward Howell</Text>
                  <View style={{flexDirection:'row'}}>
                    <Text>My teaching style and lessons tend {'\n'}to be focused around exam...</Text>
                    <View style={{width:22,height:22,backgroundColor:'#EB2D7C',borderRadius:100,marginRight:8,alignItems:'center',justifyContent:'center',marginLeft:6}}>
                      <Text style={{color:'white',fontFamily:'OpenSans400'}}>2</Text>
                    </View>

                  </View>
                </View>

              </View>
              <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between',marginTop:12,}}>
                <View style={{marginRight:12}}>
                  <Text style={{fontFamily:'OpenSans700',fontSize:14,color:'#EB2D7C',textAlign:'center'}}>£14</Text>
                  <Text style={{fontSize:12,fontFamily:'Urbanist400',textAlign:'center'}}>per hour</Text>
                </View>
                <View style={{marginHorizontal:12}}>
                  <Text style={{fontFamily:'OpenSans700',fontSize:14,color:'#EB2D7C',textAlign:'center'}}>56</Text>
                  <Text style={{fontSize:12,fontFamily:'Urbanist400',textAlign:'center'}}>hours taught</Text>
                </View>
                <View style={{marginLeft:12}}>
                  <Text style={{fontFamily:'OpenSans700',fontSize:14,color:'#EB2D7C',textAlign:'center'}}>5++</Text>
                  <Text style={{fontSize:12,fontFamily:'Urbanist400',textAlign:'center'}}>tutor rating</Text>
                </View>
              </View>
            </View>
          </View>

          <View style={{borderWidth:1,borderColor:'#D1C9E3'}}/>
          <View>

            <View style={{shadowColor: "#000",
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.25,
              shadowRadius: 3.84,

              elevation: 5,
              paddingHorizontal:18,
              paddingVertical:16
            }}>
              <View style={{flexDirection:"row",alignItems:'center'}}>
                <View style={{marginRight:12}}>
                  <Image style={{width: 72, height: 72, borderRadius: 100}}
                         source={require('../assets/images/bigThirdPeople.png')}
                  />
                </View>
                <View>
                  <Text style={{fontFamily: 'Urbanist700', fontSize: 18}}>Mathilde Langevin</Text>
                  <View style={{flexDirection:'row'}}>
                    <Text>My teaching style and lessons tend {'\n'}to be focused around exam...</Text>
                    <View style={{width:22,height:22,backgroundColor:'#EB2D7C',borderRadius:100,marginRight:8,alignItems:'center',justifyContent:'center',marginLeft:6}}>
                      <Text style={{color:'white',fontFamily:'OpenSans400'}}>2</Text>
                    </View>

                  </View>
                </View>

              </View>
              <View style={{flexDirection:'row',alignItems:'center',justifyContent:'center',marginTop:12,}}>
                <View style={{marginRight:12}}>
                  <Text style={{fontFamily:'OpenSans700',fontSize:14,color:'#EB2D7C',textAlign:'center'}}>£14</Text>
                  <Text style={{fontSize:12,fontFamily:'Urbanist400',textAlign:'center'}}>per hour</Text>
                </View>
                <View style={{marginHorizontal:12}}>
                  <Text style={{fontFamily:'OpenSans700',fontSize:14,color:'#EB2D7C',textAlign:'center'}}>56</Text>
                  <Text style={{fontSize:12,fontFamily:'Urbanist400',textAlign:'center'}}>hours taught</Text>
                </View>
                <View style={{marginLeft:12}}>
                  <Text style={{fontFamily:'OpenSans700',fontSize:14,color:'#EB2D7C',textAlign:'center'}}>5++</Text>
                  <Text style={{fontSize:12,fontFamily:'Urbanist400',textAlign:'center'}}>tutor rating</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={{borderWidth:1,borderColor:'#D1C9E3'}}/>


          <View style={{marginBottom:70}}>

            <View style={{shadowColor: "#000",
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.25,
              shadowRadius: 3.84,

              elevation: 5,
              paddingHorizontal:18,
              paddingVertical:16
            }}>
              <View style={{flexDirection:"row",alignItems:'center'}}>
                <View style={{marginRight:12}}>
                  <Image style={{width: 72, height: 72, borderRadius: 100}}
                         source={require('../assets/images/bigFourtPeople.png')}
                  />
                </View>
                <View>
                  <Text style={{fontFamily: 'Urbanist700', fontSize: 18}}>Brooke Cagle</Text>
                  <View style={{flexDirection:'row'}}>
                    <Text>My teaching style and lessons tend {'\n'}to be focused around exam...</Text>
                    <View style={{width:22,height:22,backgroundColor:'#EB2D7C',borderRadius:100,marginRight:8,alignItems:'center',justifyContent:'center',marginLeft:6}}>
                      <Text style={{color:'white',fontFamily:'OpenSans400'}}>2</Text>
                    </View>

                  </View>
                </View>

              </View>
              <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between',marginTop:12,}}>
                <View style={{marginRight:12}}>
                  <Text style={{fontFamily:'OpenSans700',fontSize:14,color:'#EB2D7C',textAlign:'center'}}>£14</Text>
                  <Text style={{fontSize:12,fontFamily:'Urbanist400',textAlign:'center'}}>per hour</Text>
                </View>
                <View style={{marginHorizontal:12}}>
                  <Text style={{fontFamily:'OpenSans700',fontSize:14,color:'#EB2D7C',textAlign:'center'}}>56</Text>
                  <Text style={{fontSize:12,fontFamily:'Urbanist400',textAlign:'center'}}>hours taught</Text>
                </View>
                <View style={{marginLeft:12}}>
                  <Text style={{fontFamily:'OpenSans700',fontSize:14,color:'#EB2D7C',textAlign:'center'}}>5++</Text>
                  <Text style={{fontSize:12,fontFamily:'Urbanist400',textAlign:'center'}}>tutor rating</Text>
                </View>
              </View>
            </View>
          </View>
        </View>


      </ScrollView>
      <View style={{width:'100%',bottom:0,position:'absolute',alignItems:'center',height:70,marginBottom:-16}}>
        <View style={{borderWidth: 1, borderColor: '#F2F0F5'}}/>
{/*        <View style={{width:55,height:55,alignItems:'center',justifyContent:'center'}}>*/}
{/*<Loupe/>*/}
{/*        </View>*/}
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
    marginBottom: 35,
    paddingHorizontal:18
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
    fontWeight: '500',
    fontFamily: "Urbanist500"
  },
  button: {
    marginBottom:60,
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


  },
  text: {
    color: 'white',
    fontSize: 14,

    fontFamily: 'Urbanist600'

  },
});
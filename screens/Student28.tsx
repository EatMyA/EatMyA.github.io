import * as React from 'react';
import { StyleSheet, Image, ScrollView,  Pressable } from 'react-native';
import { Text, View } from '../components/Themed';
import { RootStackScreenProps } from '../types';

import { useFonts } from 'expo-font';
import Explore from "../assets/images/explore";
import Heart from "../assets/images/heart";
import Order from "../assets/images/order";
import Messages from "../assets/images/messages";
import Account from "../assets/images/account";
import WhitePlus from "../assets/images/whitePlus";





export default function Student32({navigation}: RootStackScreenProps<'NotFound'>) {
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
            <View style={{ marginVertical:30}}>
              <View style={{ }}>
                <Text style={{ fontFamily: 'Urbanist700', fontSize: 24,marginTop:12}}>My Orders</Text>

              </View>


            </View>

            <View style={{shadowColor: "#000",
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.25,
              shadowRadius: 3.84,

              elevation: 5,
              padding:20,
              borderRadius:6
            }}>
              <View style={{flexDirection:"row",alignItems:"center",marginBottom:8}}>
                <Text style={{fontFamily:'Urbanist700',fontSize:18,}}>English language</Text>
                <View style={{flexDirection:"row",marginLeft:'auto'}}>
                  <View style={{width:4,height:4,backgroundColor:'#20203A',marginRight:2,borderRadius:100}}/>
                  <View style={{width:4,height:4,backgroundColor:'#20203A',marginHorizontal:2,borderRadius:100}}/>
                  <View style={{width:4,height:4,backgroundColor:'#20203A',marginLeft:2,borderRadius:100}}/>
                </View>
              </View>
              <View style={{flexDirection:"row",alignItems:'center',marginBottom:16}}>
                <View style={{width:8,height:8,backgroundColor:'#0A84FF',borderRadius:100,marginRight:8}}/>
                <Text style={{opacity:0.5,fontSize:14,fontFamily:'Urbanist600'}}>Order is open for feedback</Text>
              </View>
              <View style={{flexDirection:"row",alignItems:"center",}}>
                <Image
                  style={{width:34,height:34,marginRight:3}}
                  source={require('../assets/images/firstPeople.png')}
                />
                <Image
                  style={{width:34,height:34,marginHorizontal:3}}
                  source={require('../assets/images/secondPeople.png')}
                />
                <Image
                  style={{width:34,height:34,marginHorizontal:3}}
                  source={require('../assets/images/thirdPeople.png')}
                />
                <Image
                  style={{width:34,height:34,marginHorizontal:3}}
                  source={require('../assets/images/fourthPeople.png')}
                />
                <Image
                  style={{width:34,height:34,marginLeft:3}}
                  source={require('../assets/images/fifthPeople.png')}
                />
                <Text style={{fontFamily:"Urbanist600",fontSize:16,opacity:0.5,marginLeft:12}}>+12</Text>
              </View>
            </View>
            <View style={{alignItems:"flex-end",marginTop:100}}>

            </View>
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
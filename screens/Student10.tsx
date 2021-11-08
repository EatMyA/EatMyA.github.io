import * as React from 'react';
import { StyleSheet, ImageBackground, TextInput, SafeAreaView, ScrollView, Image } from 'react-native';
import { Text, View } from '../components/Themed';
import { RootStackScreenProps } from '../types';

import { useFonts } from 'expo-font';
import Magnifier from "../assets/images/magnifier";
import Maths from "../assets/images/Maths";
import Abc from "../assets/images/abc";
import Music from "../assets/images/music";
import EnglishTutor from "../assets/images/englishTutor";
import TwoPlus from "../assets/images/2+2";
import Division from "../assets/images/division";
export default function NotFoundScreen({navigation}: RootStackScreenProps<'NotFound'>) {
  let [fontsLoaded] = useFonts({
    'OpenSans400': require('../../../rn/AwesomeProject/assets/fonts/OpenSans-Regular.ttf'),
    'Urbanist700': require('../../../rn/AwesomeProject/assets/fonts/Urbanist-ExtraBold.ttf'),


  });
  if (!fontsLoaded) {
    return <Text>error</Text>;
  }
  return (
    <ScrollView style={styles.mainWrapper}>
      <View style={styles.container}>
        <Text style={{textAlign: 'center', fontSize: 18, paddingTop: 30, marginBottom: 16}}>What
          would you like to
          learn?</Text>
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
      <View style={{borderColor: '#d6cfe6', borderBottomWidth: 1, marginVertical: 20}}>
      </View>
      <View style={{paddingHorizontal: 20}}>
        <Text style={{fontFamily: 'Urbanist700', fontSize: 16, marginBottom: 12}}>Pick a subject</Text>
      </View>
      <SafeAreaView style={styles.container}>
        <ScrollView style={styles.scrollView} horizontal={true}>
          <View style={{
            width: 113,
            height: 113,
            borderRadius: 6,
            backgroundColor: '#543393',
            flexDirection: "row",
            alignItems: 'center',
            marginRight: 8
          }}>
            <Maths style={{flex: 1, paddingLeft: 6}} />
            <Text style={{ fontSize: 14,  color: 'white', flex: 1}}>Maths
              Tutors</Text>
          </View><View style={{
          width: 113,
          height: 113,
          borderRadius: 6,
          backgroundColor: '#543393',
          flexDirection: "row",
          alignItems: 'center',
          marginHorizontal: 8,
          overflow: 'hidden'
        }}>
          <Music style={{flex: 1, paddingLeft: 6, marginLeft: -15}} />
          <Text style={{ fontSize: 14, color: 'white', flex: 1}}>Music
            Tutors</Text>
        </View><View style={{
          width: 113,
          height: 113,
          borderRadius: 6,
          backgroundColor: '#543393',
          flexDirection: "row",
          alignItems: 'center',
          marginHorizontal: 8
        }}>
          <EnglishTutor style={{flex: 1,}} />
          <Text style={{ fontSize: 14,  color: 'white', flex: 1}}>English
            Tutors</Text>
        </View><View style={{
          width: 113,
          height: 113,
          borderRadius: 6,
          backgroundColor: '#543393',
          flexDirection: "row",
          alignItems: 'center',
          marginHorizontal: 8
        }}>
          <Maths style={{flex: 1, paddingLeft: 6}} />
          <Text style={{ fontSize: 14,  color: 'white', flex: 1}}>Maths
            Tutors</Text>
        </View><View style={{
          width: 113,
          height: 113,
          borderRadius: 6,
          backgroundColor: '#543393',
          flexDirection: "row",
          alignItems: 'center',
          marginHorizontal: 8,
          overflow: "hidden"
        }}>
          <Music style={{flex: 1, paddingLeft: 6, marginLeft: -15}} />
          <Text style={{fontSize: 14, color: 'white', flex: 1}}>Maths
            Tutors</Text>
        </View>
        </ScrollView>
      </SafeAreaView><View style={{paddingHorizontal: 20}}>
      <Text style={{fontFamily: 'Urbanist700',  fontSize: 16, marginBottom: 12}}>What’s your
        goal?</Text>
    </View>
      <SafeAreaView style={styles.container}>
        <ScrollView style={styles.scrollView} horizontal={true}>
          <View style={{marginRight: 8}}>

            <Image style={{width: 114, height: 114, borderRadius: 6}}
                   source={require('../assets/images/grades.png')}
            />


            <Text style={{fontFamily: 'Urbanist700',    fontSize: 14, marginTop: 6}}>Improve Grades</Text>
          </View>
          <View style={{marginHorizontal: 8}}>

            <Image style={{width: 114, height: 114, borderRadius: 6}}
                   source={require('../assets/images/university.png')}
            />


            <Text style={{fontFamily: 'Urbanist700',    fontSize: 14, marginTop: 6}}>Go to
              University</Text>
          </View>
          <View style={{marginHorizontal: 8}}>

            <Image style={{width: 114, height: 114, borderRadius: 6}}
                   source={require('../assets/images/competition.png')}
            />


            <Text style={{fontFamily: 'Urbanist700',    fontSize: 14, marginTop: 6}}>Win the
              Competition</Text>
          </View><View style={{
          width: 113,
          height: 113,
          borderRadius: 6,
          backgroundColor: '#543393',
          flexDirection: "row",
          alignItems: 'center',
          marginHorizontal: 8
        }}>
          <Maths style={{flex: 1, paddingLeft: 6}} />
          <Text style={{ fontSize: 14,    color: 'white', flex: 1}}>Maths
            Tutors</Text>
        </View><View style={{
          width: 113,
          height: 113,
          borderRadius: 6,
          backgroundColor: '#543393',
          flexDirection: "row",
          alignItems: 'center',
          marginHorizontal: 8,
          overflow: "hidden"
        }}>
          <Music style={{flex: 1, paddingLeft: 6, marginLeft: -15}} />
          <Text style={{ fontSize: 14,    color: 'white', flex: 1}}>Maths
            Tutors</Text>
        </View>
        </ScrollView>
      </SafeAreaView>
      <SafeAreaView style={styles.container}>
        <Text style={{fontFamily: 'Urbanist700',    fontSize: 16, marginBottom: 12, paddingLeft: 18}}>Select
          your level</Text>
        <ScrollView style={styles.scrollView} horizontal={true}>

          <View>
            <View style={{
              width: 113,
              height: 113,
              borderRadius: 6,
              backgroundColor: '#543393',
              justifyContent: "center",
              alignItems: 'center',
              marginRight: 8
            }}>
              <View style={{height: '50%', backgroundColor: 'transparent'}}>
                <Abc style={{marginTop: 'auto'}} />
              </View>
              <View style={{height: '50%', backgroundColor: 'transparent'}}>
                <Text style={{
                  fontFamily: 'Urbanist700',
                  fontSize: 24,

                  color: 'white',
                  marginTop: 8,
                  flex: 1,
                  marginBottom: 'auto'
                }}>123</Text>
              </View>

            </View>
            <Text style={{fontFamily: 'Urbanist700',    fontSize: 14, marginTop: 6}}>Pre-school</Text>
          </View>
          <View style={{marginHorizontal: 8}}>
            <View style={{
              width: 113,
              height: 113,
              borderRadius: 6,
              backgroundColor: '#543393',
              justifyContent: "center",
              alignItems: 'center',

            }}>
              <View style={{height: '50%', backgroundColor: 'transparent'}}>
                <TwoPlus style={{marginTop: 'auto'}} />
              </View>
              <View style={{height: '50%', backgroundColor: 'transparent'}}>
                <Text style={{
                  fontFamily: 'Urbanist700',
                  fontSize: 24,

                  color: 'white',
                  marginTop: 8,
                  marginBottom: 'auto'
                }}>KS1</Text>
              </View>

            </View>
            <Text style={{fontFamily: 'Urbanist700',    fontSize: 14, marginTop: 6}}>Key Stage 1 {'\n'}Years
              1-2</Text>
          </View>
          <View style={{marginHorizontal: 8}}>
            <View style={{
              width: 113,
              height: 113,
              borderRadius: 6,
              backgroundColor: '#543393',
              justifyContent: "center",
              alignItems: 'center',
            }}>
              <View style={{height: '50%', backgroundColor: 'transparent'}}>
                <Division style={{marginTop: 'auto'}} />
              </View>
              <View style={{height: '50%', backgroundColor: 'transparent'}}>
                <Text style={{
                  fontFamily: 'Urbanist700',
                  fontSize: 24,

                  color: 'white',
                  marginTop: 8,
                  marginBottom: 'auto'
                }}>123</Text>
              </View>

            </View>
            <Text style={{fontFamily: 'Urbanist700',    fontSize: 14, marginTop: 6}}>Key Stage 2{'\n'}Years
              3-6</Text>
          </View>
          <View style={{
            width: 113,
            height: 113,
            borderRadius: 6,
            backgroundColor: '#543393',
            flexDirection: "row",
            alignItems: 'center',
            marginHorizontal: 8
          }}>
            <Maths style={{flex: 1, paddingLeft: 6}} />
            <Text style={{fontSize: 14,    color: 'white', flex: 1}}>Maths
              Tutors</Text>
          </View><View style={{
          width: 113,
          height: 113,
          borderRadius: 6,
          backgroundColor: '#543393',
          flexDirection: "row",
          alignItems: 'center',
          marginHorizontal: 8,
          overflow: "hidden"
        }}>
          <Music style={{flex: 1, paddingLeft: 6, marginLeft: -15}} />
          <Text style={{ fontSize: 14,    color: 'white', flex: 1}}>Maths
            Tutors</Text>
        </View>
        </ScrollView>
      </SafeAreaView>
      <View style={{paddingHorizontal: 18}}>
        <View>
          <Text style={{fontFamily: 'Urbanist800', fontSize: 24, marginBottom: 10}}>Many tutors to choose from</Text>
          <Text style={{fontSize: 14,    marginBottom: 12}}><Text style={{fontFamily: 'Urbanist700'}}>Select
            the best
            teacher</Text> <Text style={{color: '#EB2D7C'}}>for you!</Text></Text>
        </View>
        <View style={{flexDirection: "row"}}>
          <View style={{width: '50%'}}>
            <View style={{
              fontFamily: 'OpenSans400',
              fontSize: 14,
              textDecorationLine: 'underline',
              marginBottom: 40,
              color: '#20203A'
            }}>
              <Text style={{paddingVertical: 10}}>Maths</Text>
              <Text style={{paddingVertical: 10}}>English</Text>
              <Text style={{paddingVertical: 10}}>Music</Text>
              <Text style={{paddingVertical: 10}}>Science</Text>
              <Text style={{paddingVertical: 10}}>Languages</Text>
            </View>

          </View>
          <View style={{width: '50%'}}>
            <View style={{
              fontFamily: 'OpenSans400',
              fontSize: 14,
              textDecorationLine: 'underline',
              marginBottom: 40,
              color: '#20203A'
            }}>
              <Text style={{paddingVertical: 10}}>11+ & Entrance Exams</Text>
              <Text style={{paddingVertical: 10}}>Computer Science</Text>
              <Text style={{paddingVertical: 10}}>Geography</Text>
              <Text style={{paddingVertical: 10}}>History</Text>
              <Text style={{paddingVertical: 10}}>All subjects</Text>
            </View>

          </View>
        </View>
        <View>
          <Text style={{fontFamily: 'Urbanist800', fontSize: 24, marginBottom: 25}}>Explore tutors near you</Text>
          <SafeAreaView style={{marginBottom:20}}>

            <ScrollView horizontal={true}>
              <View style={{flexDirection: 'row', alignItems: "center"}}>
                <View>
                  <Image style={{width: 114, height: 114, borderRadius: 6,}}
                         source={require('../assets/images/grades.png')}
                  />
                </View>
                <Text style={{fontFamily: "Urbanist700", fontSize: 14, marginLeft: 16, width: 150}}>London</Text>
              </View>
              <View style={{flexDirection: 'row', alignItems: "center"}}>
                <View>
                  <Image style={{width: 114, height: 114, borderRadius: 6}}
                         source={require('../assets/images/grades.png')}
                  />
                </View>
                <Text style={{fontFamily: "Urbanist700", fontSize: 14, marginLeft: 16}}>London</Text>
              </View>
            </ScrollView>
          </SafeAreaView>
          <SafeAreaView style={{marginBottom:70}}>

            <ScrollView horizontal={true}>
              <View style={{flexDirection: 'row', alignItems: "center"}}>
                <View>
                  <Image style={{width: 114, height: 114, borderRadius: 6,}}
                         source={require('../assets/images/grades.png')}
                  />
                </View>
                <Text style={{fontFamily: "Urbanist700", fontSize: 14, marginLeft: 16, width: 150}}>London</Text>
              </View>
              <View style={{flexDirection: 'row', alignItems: "center"}}>
                <View>
                  <Image style={{width: 114, height: 114, borderRadius: 6}}
                         source={require('../assets/images/grades.png')}
                  />
                </View>
                <Text style={{fontFamily: "Urbanist700", fontSize: 14, marginLeft: 16}}>London</Text>
              </View>
            </ScrollView>
          </SafeAreaView>

        </View>
        <View style={{borderRadius:12}}>

          <ImageBackground source={require('../assets/images/expert.png')} style={{padding:20}}>

            <Text style={{fontFamily:'Urbanist700',fontSize:18,color:'white'}}>How to become{"\n"}an Expert?</Text>
            <Text style={{fontFamily:'OpenSans400',fontSize:12,color:'white'}}>Ready to teach? {"\n"}Sign up as a tutor today!</Text>
          </ImageBackground>


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
    marginBottom: 35,
    paddingHorizontal: 18,
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

  },
  inputStyle: {
    flex: 1,
    fontSize: 14,
    fontFamily: "OpenSans400"
  },
  textNumber: {
    opacity: 0.5,
    fontSize: 12,
    fontFamily: 'OpenSans400',
    marginBottom: 6
  },
  scrollView: {
    paddingHorizontal: 20,
  },
  text: {
    fontSize: 42,
  },
});
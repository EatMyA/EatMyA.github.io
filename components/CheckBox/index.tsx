import React from 'react'
import styles from './styles'
import Active from '../../assets/images/active';
import { TouchableOpacity, Text,View } from 'react-native'

const CheckBox = ({  onPress, style, textStyle,selected=false, size = 30, color = '#211f30', text = '', ...props}) => (
  <TouchableOpacity style={[styles.checkBox, style]} onPress={onPress} {...props}>
    {selected && <View style={{width:24,height:24,backgroundColor:'#543393',borderRadius:4,flexDirection:"row",alignItems:"center",justifyContent:"center"}}>
      <Active/>
    </View>}
    {!selected && <View style={{width:24,height:24,backgroundColor:'#D6CFE6',borderRadius:4}}></View>}

    <Text style={textStyle}> {text} </Text>
  </TouchableOpacity>
)

export default CheckBox
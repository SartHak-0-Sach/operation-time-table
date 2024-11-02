import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {Entypo} from '@expo/vector-icons'
import IconButton from './IconButton'
import colors from '../config/colors'

export default function RunningAppoinmentCard({name,email,phone_no,disease,HandleCheck}) {
  return (
    <View style={styles.Card}>

        <View style={styles.dataMenu}>
            <View style={styles.icon}>
                <Entypo size={35} name="user" />
            </View>
        <View style={styles.textContainer}>
          <Text style={styles.text}>Name :- {name}</Text> 
           <Text style={styles.text}>Email :- {email} </Text>
           <Text style={styles.text}>Contact No :- {phone_no}</Text>
           <Text style={styles.text}>Disease :- {disease}</Text>
        </View>
        </View>

        <View style={styles.ButtonContainer}>
            <IconButton 
            onPress={HandleCheck}
            name="check" style={{backgroundColor:'#34eb49'}}
            />
            <IconButton onPress={() => Linking.openURL(`tel:${phone_no}`)} name="phone" style={{backgroundColor:'#34a8eb'}} />
        </View>
      
    </View>
  )
}

const styles = StyleSheet.create({
    Card:{
        padding:10,
        borderRadius:5,
        margin : 20,
        elevation:10,
        backgroundColor :colors.white,
        overflow:'scroll'
    },
    dataMenu:{
      flexDirection:'row',
      justifyContent:'space-around',
      marginBottom:10
    },
    textContainer:{
      flex:0.8
    },
    icon:{
      alignSelf:'center'
    },
    ButtonContainer:{
      borderColor:"#000",
      borderTopWidth:2,
        padding:10,
        flexDirection:'row',
        justifyContent:'space-around'
    },
})
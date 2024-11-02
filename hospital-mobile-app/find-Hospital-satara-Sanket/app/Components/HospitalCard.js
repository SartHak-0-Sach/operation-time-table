import { StyleSheet, Text, TouchableOpacity, View,Image } from 'react-native'
import React from 'react'
import AppText from './AppText';
import colors from '../config/colors';

export default function HospitalCard({details,onPress}) {
    const {name,Address,Contact_No,email,Images} = details;
  return (
    <View style={styles.Card}>

        <View style={styles.firstContainer}>
            <View style={styles.LogoContainer}>
                <Image 
                    style={styles.image}
                    source={{uri:Images[0]}}
                />
            </View>
            <View style={styles.dataContainer}>
                    <AppText numberOfLines={1} style={styles.patientAppText}>Hospital Name - {name}</AppText>
                    <AppText numberOfLines={1} style={styles.patientAppText}>Address - {Address}</AppText>
                    <AppText numberOfLines={1} style={styles.patientAppText}>Contact no - {Contact_No}</AppText>
                    <AppText numberOfLines={1} style={styles.patientAppText}>email - {email}</AppText>
                    <TouchableOpacity onPress={onPress} style={styles.button}>
                        <Text style={styles.text}>See Details</Text>
                    </TouchableOpacity>
            </View>
        </View>
     
    </View>
  )
}

const styles = StyleSheet.create({
    Card:{
        borderRadius:15,
        backgroundColor :colors.white,
        margin : 20,
        elevation:10,
        overflow:'hidden',
        padding:10
    },
    firstContainer:{
        width:"100%",
        height:"100%",  
        flex:1,
        flexDirection:'row'
      },
      image:{
        height:"100%",
        width:"90%",
        borderRadius:10,
        alignSelf:'flex-start'
      },
      LogoContainer:{
        width:"40%",
        height:"100%"
      },
      dataContainer:{
        flex:1,
        justifyContent:'center'
      },
      patientAppText:{
        fontSize:12,
        margin:5
      },
      button:{
        padding:10,
        justifyContent:'center',
        alignItems:'center',
        marginTop:10,
        backgroundColor:'#FBC85C',
        borderRadius:10,    
      },
      text:{
        color:'#fff'
      }
})
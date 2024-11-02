import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import AppText from './AppText'

export default function CategoryPickerItem({onPress,item}) {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
        <AppText style={styles.label}>{item.label}</AppText>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    container:{
        paddingHorizontal:30,
        paddingVertical:15,
        alignItems:'center'
    },
    label:{
        marginTop:5,
        textAlign:'center'
    }
})
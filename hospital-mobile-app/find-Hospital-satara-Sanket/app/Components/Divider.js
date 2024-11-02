import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import colors from '../config/colors'

export default function Divider() {
  return (
    <View style={styles.container}>
      
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        height:5,
        backgroundColor:colors.light
    }
})
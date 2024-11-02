import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AppText from '../AppText'

export default function ErrorMessage({error,visible}) {
    if(!visible || !error) return null;
  return (
   <AppText style={styles.error}>
       {error}
   </AppText>
  )
}

const styles = StyleSheet.create({
    error:{
       color:'red' 
    }
})
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import LottieView from 'lottie-react-native';

export default function ActivityIndicator({visible=false}) {
    if(!visible) return null;
  return (
    <View style={styles.overlay}>
        <LottieView

            autoPlay
            loop
            source={require('../assets/animations/loader.json')}
        
        />
    </View>
  )
}

const styles = StyleSheet.create({
    overlay:{
        position:'absolute',
        backgroundColor:'white',
        opacity:0.8,
        height:'100%',
        width:'100%',
        zIndex:1
      }
})
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useNetInfo } from '@react-native-community/netinfo';
import AppText from './AppText'
import colors from '../config/colors'
import  Constants  from 'expo-constants';

export default function offlineNotice() {
    const netInfo = useNetInfo();
    if(netInfo.type !== "unknown" && netInfo.isInternetReachable === false){

        return (
          <View style={styles.container}>
            <AppText style={styles.text}>No Internet Connection</AppText>
          </View>
        )
    }
    return null;
}

const styles = StyleSheet.create({
    container:{
        zIndex:1,
        backgroundColor:colors.primary,
        height:70,
        width:'100%',
        position:'relative',
        justifyContent:'center',
        alignItems:'center',
        paddingBottom:20,
        top:Constants.statusBarHeight
    },
    text:{
        color:colors.white
    }
})
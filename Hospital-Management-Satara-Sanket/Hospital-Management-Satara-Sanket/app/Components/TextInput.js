import { StyleSheet, Text, View,TextInput } from 'react-native'
import React from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import defaultStyle from '../config/styles';

export default function AppTextInput({icon,width="100%",...otherProps}) {
  return (
    <View style={[styles.container,{width}]}>
        {icon && <MaterialCommunityIcons
        name={icon}
        size={20} color={defaultStyle.colors.medium}
        style={styles.icon}
        /> }

        <TextInput 
        placeholderTextColor={defaultStyle.colors.medium}
        style={[defaultStyle.text,{width:"100%"}]} {...otherProps}
        />

    </View>
  )
}

const styles = StyleSheet.create({
    container :{
        backgroundColor : defaultStyle.colors.light,
        borderRadius:25,
        flexDirection : "row",
        padding:15,
        marginVertical:10
    },
    icon:{
        marginRight:10
    }
})
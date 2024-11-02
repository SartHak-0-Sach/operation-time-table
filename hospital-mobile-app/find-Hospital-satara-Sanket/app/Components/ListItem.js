import { StyleSheet, Text, TouchableHighlight, View } from 'react-native'
import React from 'react'
import { GestureHandlerRootView, Swipeable } from "react-native-gesture-handler";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import colors from '../config/colors';
import AppText from './AppText';

export default function ListItem({title,subtitle,image,onPress,renderRightActions,IconComponent}) {
  return (
    <GestureHandlerRootView>
        <Swipeable renderRightActions={renderRightActions}>
                <TouchableHighlight underlayColor={colors.light}
                onPress={onPress}
                >
                    <View style={styles.container}>
                        {IconComponent}
                        {
                            image && <Image style={styles.image} source={image} />
                        }
                        <View style={styles.detailsContainer}>
                            <AppText style={styles.title} numberOfLines={1}>
                                {title}
                            </AppText>
                            {
                                subtitle && <AppText style={styles.title} numberOfLines={2}>
                                {subtitle}
                            </AppText>
                            }
                        </View>
                        <MaterialCommunityIcons color={colors.medium} name='chevron-right' size={25} />
                    </View>
                </TouchableHighlight>
        </Swipeable>
    </GestureHandlerRootView>
  )
}

const styles = StyleSheet.create({
    container : {
        alignItems:'center',
        flexDirection :"row",
        padding:15,
        alignItems:'center',
        backgroundColor:colors.white
    },
    image:{
        width:70,
        height : 70,
        borderRadius : 35,
    },
    title:{
        fontWeight:"500",
    },
    subTitle:{
        color: colors.medium
    },
    detailsContainer:{
        marginLeft:10,
        justifyContent:"center",
        flex:1
    }
})
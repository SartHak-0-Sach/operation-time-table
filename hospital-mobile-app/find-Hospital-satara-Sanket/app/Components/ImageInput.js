import { Alert, Image, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native'
import React, { useEffect } from 'react'
import * as ImagePicker from 'expo-image-picker';
import {MaterialCommunityIcons} from '@expo/vector-icons';
import colors from '../config/colors';

export default function ImageInput({imageUri,onChangeImage}) {
    const requestPermission = async () => {
        const result = await ImagePicker.getMediaLibraryPermissionsAsync();

    }

    useEffect(() => {
        requestPermission();
    },[]);

    const handlePress = () => {
        if(!imageUri){
            selectImage();
        }else{
            Alert.alert('Delete','Are you shure you want to delete this Image?',[{
                text:'Yes',onPress:() => onChangeImage(null)
            },
            {text:'no'}
        ])
        }
    }

    const selectImage = async () => {
        try {
            const result = await ImagePicker.launchImageLibraryAsync({
                mediaTypes:ImagePicker.MediaTypeOptions.Images,
                quality:0.5
            });
            if(!result.cancelled) onChangeImage(result.uri);
        } catch (error) {
            console.log("Error While Loading Liabrary",error);
        }
    }



  return (
    <TouchableWithoutFeedback
    onPress={handlePress}
    >
        <View style={styles.container}>
                {
                    !imageUri && (
                        <MaterialCommunityIcons name='camera' color={colors.medium} />
                    )
                }
                {
                    imageUri && <Image source={{uri:imageUri}} style={styles.image}/>
                }
        </View>

    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
    container:{
        alignItems:'center',
        backgroundColor:colors.light,
        borderRadius:15,
        height:100,
        justifyContent:'center',
        width:100,
        overflow:"hidden"
    },
    image:{
        width:'100%',
        height:'100%'
    }
})
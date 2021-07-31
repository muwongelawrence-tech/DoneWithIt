import React, { useEffect, useState } from 'react';
import { Alert, Image, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native';
import colors from '../config/colors';
import * as ImagePicker from "expo-image-picker";
import * as Permissions from "expo-permissions";
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function ImageInput({imageUri ,onChangeImage}) {

    useEffect(() => {
        requestPermisson();
     },[]);
   
    const requestPermisson = async () => {
        const { granted } = await Permissions.askAsync(Permissions.CAMERA ,Permissions.CALENDAR);
       // const { granted } = await ImagePicker.requestCameraPermissionsAsync();
           if(!granted){
             alert("you need to enable permission to access the library.");
           }
    };

    const handlePress = () => {
       if(!imageUri) selectImage();

       else Alert.alert("Delete","Are you sure you want to delete this image?",[
           { text:"Yes", onPress : () => onChangeImage(null)},
           { text:"No"}
    ]);
       
    }

    const selectImage = async () => {
        try {
          const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            quality: 0.5
          });
          if(!result.cancelled){
            onChangeImage(result.uri);
          }
        } catch (error) {
          console.log("Error reading an Image" ,error.message);
        }
       
      };

    return (
        <TouchableWithoutFeedback onPress = {handlePress}>
            <View style = {styles.container}>
                {imageUri ? (
                    <Image source= {{uri : imageUri }} style = {styles.image}/>
                ) :(
                    <MaterialCommunityIcons color={colors.medium} name = "camera" size = {30}/>
                )}
            </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    container:{
       backgroundColor: colors.light,
       borderRadius:15,
       alignItems:"center",
       justifyContent: "center",
       height:100,
       width: 100,
       overflow: "hidden"
    },
    image : {
        height: "100%",
        width: "100%"
    }
});

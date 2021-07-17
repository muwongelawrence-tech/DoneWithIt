import React from 'react';
import { StyleSheet, Text, TextInput, View, Platform } from 'react-native';

import {MaterialCommunityIcons} from "@expo/vector-icons";
import colors from '../config/colors';

export default function AppTextInput({icon,...otherProps}) {
    return (
        <View style = {styles.container}>
            <View style = {styles.icon}>
              {icon && <MaterialCommunityIcons name = {icon} size ={20} color = {colors.medium} />}
            </View>
 
            <TextInput style = {styles.textInput} {...otherProps}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:colors.light,
        borderRadius:25,
        flexDirection:"row",
        width:"100%",
        padding :10,
        marginVertical:10,
        overflow: "hidden"
    },
    textInput:{
        fontSize:18,
        fontFamily:Platform.OS ==="android" ? "Roboto" : "Avenir",
        color:colors.dark,
        width:"100%",
    },
    icon:{
       marginRight:10 ,
       paddingLeft:2,
       justifyContent:"center",
       paddingLeft:10
    }
});

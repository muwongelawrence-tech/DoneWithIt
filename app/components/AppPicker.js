import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Platform, TouchableWithoutFeedback, Button, Modal } from 'react-native';

import {MaterialCommunityIcons} from "@expo/vector-icons";
import colors from '../config/colors';
import AppText from './AppText';
import Screen from '../screens/Screen';

export default function AppPicker({icon,placeholder}) {
    const [modalVisible , setModalVisible] = useState(false);

    return (
        <>
            <TouchableWithoutFeedback onPress = {() => setModalVisible(true)}>       
                <View style = {styles.container}>
                    <View style = {styles.icon}>
                    {icon && <MaterialCommunityIcons name = {icon} size ={20} color = {colors.medium} />}
                    </View>
        
                    <AppText style = {styles.text}> {placeholder}</AppText>
                    <View style = {styles.chevron}>
                    <MaterialCommunityIcons name = "chevron-down" size ={20} color = {colors.medium} />
                    </View>
                    
                </View>
            </TouchableWithoutFeedback>

             <Screen>
                <Modal visible = {modalVisible} animationType = "slide">
                  <Button title = "Close" onPress = {() => setModalVisible(false)}></Button>
                </Modal>
             </Screen>
            

        </>

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
    },

    text:{
        flex :1
    },

    chevron:{
        justifyContent:"center",
        marginRight:5
    }

});

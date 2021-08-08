import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import colors from '../config/colors';
import Constants from "expo-constants";
import { useNetInfo } from '@react-native-community/netinfo';


export default function OfflineNotice() {

    const netInfo = useNetInfo();
    
    if(netInfo.type !== "unknown" && netInfo.isInternetReachable === false)
        return (
        <View style = {styles.container}>
            <Text style = {styles.text}> No Internet Connection</Text>
        </View>
    );

    return null;
}

const styles = StyleSheet.create({
   container: {
       backgroundColor: colors.primary,
       height:80,
       justifyContent : "center",
       alignItems : "center",
       width: "100%",
       top:Constants.statusBarHeight,

   },
   text : {
        color:colors.white,
        textAlign : "center",
        fontWeight :"bold",
        fontSize : 15
   }
});

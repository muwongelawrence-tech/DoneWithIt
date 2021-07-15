import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {useDeviceOrientation, useDimensions } from "@react-native-community/hooks";
import { StyleSheet } from 'react-native';
import WelcomeScreen from './app/screens/WelcomeScreen';
import ViewImageScreen from './app/screens/ViewImageScreen';
import ListingDetailsScreen from './app/screens/ListingDetailsScreen';
import MessageScreen from './app/screens/MessageScreen';


export default function App() {
  const {landscape} = useDeviceOrientation();
  return (
    // <SafeAreaView style = {styles.container}>

    //    <WelcomeScreen/>
    //      <ViewImageScreen/> 
     //<ListingDetailsScreen/>
    // </SafeAreaView>


    <MessageScreen/>
    
  
    
  );
}

const styles = StyleSheet.create({
  
});

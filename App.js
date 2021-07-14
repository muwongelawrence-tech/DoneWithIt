import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {useDeviceOrientation, useDimensions } from "@react-native-community/hooks";

import { StyleSheet,
         Text,
         View,
         SafeAreaView,
         Platform,
         Dimensions

      } from 'react-native';

import WelcomeScreen from './app/screens/WelcomeScreen';
import ViewImageScreen from './app/screens/ViewImageScreen';
import ListingDetailsScreen from './app/screens/ListingDetailsScreen';


export default function App() {
  const {landscape} = useDeviceOrientation();
  return (
    // <SafeAreaView style = {styles.container}>

    //   {/* <WelcomeScreen/>
    //      <ViewImageScreen/> */}
     

    // </SafeAreaView>

  <ListingDetailsScreen/>
     
    
  
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex :1,
    justifyContent :"center",
    alignItems:"center"
  }
});

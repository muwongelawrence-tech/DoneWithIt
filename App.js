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

export default function App() {
  const {landscape} = useDeviceOrientation();
  return (
     <WelcomeScreen/>
    // <ViewImageScreen/>
  );
}

const styles = StyleSheet.create({});

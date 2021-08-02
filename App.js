import { StatusBar } from 'expo-status-bar';
import React,{useEffect, useState} from 'react';
import {useDeviceOrientation, useDimensions } from "@react-native-community/hooks";
import { Button, Image, Switch, Text, TextInput, View } from 'react-native';
import WelcomeScreen from './app/screens/WelcomeScreen';
import ViewImageScreen from './app/screens/ViewImageScreen';
import ListingDetailsScreen from './app/screens/ListingDetailsScreen';
import MessageScreen from './app/screens/MessageScreen';
import Screen from './app/screens/Screen';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer }from '@react-navigation/native';
import * as ImagePicker from "expo-image-picker";
import * as Permissions from "expo-permissions";
import Icon from './app/components/Icon';
import ListItem from './app/components/lists/ListItem';
import AccountScreen from './app/screens/AccountScreen';
import ListingScreen from './app/screens/ListingScreen';
import AppTextInput from './app/components/AppTextInput';
import AppPicker from './app/components/AppPicker';
import LoginScreen from './app/screens/LoginScreen';
import ListingEditScreen from './app/screens/ListingEditScreen';
import RegisterScreen from './app/screens/RegisterScreen';
import ImageInput from './app/components/ImageInput';
import ImageInputList from './app/components/ImageInputList';
import AuthNavigator from './app/navigation/AuthNavigator';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import navigationTheme from './app/navigation/navigationTheme';



export default function App() {
 // <AuthNavigator/>
  return (
    <NavigationContainer theme = {navigationTheme}>
       <AuthNavigator/>
    </NavigationContainer>
  );
}




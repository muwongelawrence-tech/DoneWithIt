import { StatusBar } from 'expo-status-bar';
import React,{useEffect, useState} from 'react';
import {useDeviceOrientation, useDimensions } from "@react-native-community/hooks";
import { Button, Image, Switch, Text, TextInput, View } from 'react-native';
import WelcomeScreen from './app/screens/WelcomeScreen';
import ViewImageScreen from './app/screens/ViewImageScreen';
import ListingDetailsScreen from './app/screens/ListingDetailsScreen';
import MessageScreen from './app/screens/MessageScreen';
import Screen from './app/screens/Screen';
import * as ImagePicker from "expo-image-picker";
import * as Permissions from "expo-permissions";
import Icon from './app/components/Icon';
import ListItem from './app/components/ListItem';
import AccountScreen from './app/screens/AccountScreen';
import ListingScreen from './app/screens/ListingScreen';
import AppTextInput from './app/components/AppTextInput';
import AppPicker from './app/components/AppPicker';
import LoginScreen from './app/screens/LoginScreen';
import ListingEditScreen from './app/screens/ListingEditScreen';
import RegisterScreen from './app/screens/RegisterScreen';


export default function App() {
  const {landscape} = useDeviceOrientation();
   const [imageUri ,setImageUri] = useState();

  const requestPermisson = async () => {
    const { granted } = await Permissions.askAsync(Permissions.CAMERA ,Permissions.CALENDAR);
   // const { granted } = await ImagePicker.requestCameraPermissionsAsync();
       if(!granted){
         alert("you need to enable permission to access the library.");
       }
  };

  useEffect(() => {
     requestPermisson();
  },[]);


  // selecting an image from the library.

  const selectImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync();
      if(!result.cancelled){
         setImageUri(result.uri);
      }
    } catch (error) {
      console.log("Error reading an Image" ,error.message);
    }
   
  };

  return (
    

    //  <WelcomeScreen/>
    //    <ViewImageScreen/> 
     // <ListingDetailsScreen/>
      // <MessageScreen/>
   
  //    <AccountScreen/> 
 //  <ListingScreen/>  
// <Switch
// value = {isNew}
// onValueChange = {newValue => setIsNew(newValue)}

// />
// <LoginScreen/>
    //<ListingEditScreen/>
    //<RegisterScreen/>
    <Screen>
      <Button title = "Select Image" onPress = {selectImage}/>
      <Image source = {{uri : imageUri}} style ={{width:200 , height : 200}}/>
    </Screen>

  );
}



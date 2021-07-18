import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import {useDeviceOrientation, useDimensions } from "@react-native-community/hooks";
import { StyleSheet, Switch, Text, TextInput, View } from 'react-native';
import WelcomeScreen from './app/screens/WelcomeScreen';
import ViewImageScreen from './app/screens/ViewImageScreen';
import ListingDetailsScreen from './app/screens/ListingDetailsScreen';
import MessageScreen from './app/screens/MessageScreen';
import Screen from './app/screens/Screen';
import Icon from './app/components/Icon';
import ListItem from './app/components/ListItem';
import AccountScreen from './app/screens/AccountScreen';
import ListingScreen from './app/screens/ListingScreen';
import AppTextInput from './app/components/AppTextInput';
import AppPicker from './app/components/AppPicker';
import LoginScreen from './app/screens/LoginScreen';

 const categories = [
   {label: "furniture",value:1},
   {label: "clothing",value:2},
   {label: "cameras",value:3},
 ];

export default function App() {
  const {landscape} = useDeviceOrientation();

  const [isNew, setIsNew] = useState(false);
  const [category , setCategory] = useState();
  return (
    

    //  <WelcomeScreen/>
    //    <ViewImageScreen/> 
     // <ListingDetailsScreen/>
     //  <MessageScreen/>
     //   <Icon name = "email"/>
  //       <ListItem
  //        title = "my title"
  //        ImageComponent = {<Icon name = "email"/>}
  //       />
  //    <AccountScreen/> 
 //  <ListingScreen/>  

// <AppTextInput
// placeholder = "Email"
// icon = "email"
// />
// <Switch
// value = {isNew}
// onValueChange = {newValue => setIsNew(newValue)}

// />
    
    // <Screen>
    //   <AppPicker 
    //     selectedItem = {category}
    //     onSelectItem = {item => setCategory(item)}
    //      items = {categories} 
    //      icon = "apps" 
    //      placeholder = "Category"
    //   />

    //   <AppTextInput icon = "email" placeholder = "Email"/>
    // </Screen>
   
    <LoginScreen/>
  );
}

const styles = StyleSheet.create({
  
});

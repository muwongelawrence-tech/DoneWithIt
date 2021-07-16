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


export default function App() {
  const {landscape} = useDeviceOrientation();

  const [isNew, setIsNew] = useState(false);

  return (
    

    //    <WelcomeScreen/>
    //     <ViewImageScreen/> 
     //    <ListingDetailsScreen/>
     //    <MessageScreen/>
     //   <Icon name = "email"/>
  //       <ListItem
  //        title = "my title"
  //        ImageComponent = {<Icon name = "email"/>}
  //       />
//      <AccountScreen/> 
//       <ListingScreen/>  
    
    <Screen>
         <AppTextInput
           placeholder = "Email"
           icon = "email"
         />
         <Switch
           value = {isNew}
           onValueChange = {newValue => setIsNew(newValue)}

         />
    </Screen>
   
  );
}

const styles = StyleSheet.create({
  
});

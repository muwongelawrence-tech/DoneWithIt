import React ,{useState} from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import AppButton from '../components/AppButton';
import AppTextInput from '../components/AppTextInput';
import Screen from './Screen';

export default function LoginScreen() {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    return (
       <Screen style = {styles.container}>
           <Image  style = {styles.image} source = {require("../assets/done_logo.jpeg")}/>

           <AppTextInput 
             autoCapitalize = "none"
             autoCorrect = {false}
              placeholder = "Email"
              icon = "email"
              keyBoardType = "email-address"
              onChangeText = {text => setEmail(text)}
              textContentType = "emailAddress"
           />

           <AppTextInput 
             autoCapitalize = "none"
             autoCorrect = {false}
              placeholder = "Password"
              icon = "lock"
              keyBoardType = "email-address"
              onChangeText = {text => setPassword(text)}
              textContentType = "password"
              secureTextEntry = {true}
           />

           <AppButton
             title = "login" 
             onPress = {() => console.log(email,password)}
           />
       </Screen>
    );
}

const styles = StyleSheet.create({
    container :{
       padding:5
    },
    image:{
        width:80,
        height:80,
        alignSelf:"center",
        marginTop:50,
        marginBottom:20,

    }
});

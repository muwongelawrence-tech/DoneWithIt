import React from 'react';
import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native';
import AppButton from '../components/AppButton';

export default function WelcomeScreen() {
    return (
       <ImageBackground
       blurRadius ={2} 
       style = {styles.background}
       source = {require("../assets/background3.jpeg")}>
           <View style = {styles.logoContainer}>

           <Image
           style = {styles.logo}
           source = {require("../assets/logo1.jpg")}
           />
           <Text style = {styles.tagline}>Sell what you Don't Need</Text>

           </View>
          
      
       <View style = {styles.buttonsContainer}>
       <AppButton title = "login" onPress= {() => console.log("tapped")}/>
       <AppButton title = "Register"  color = "secondary" onPress= {() => console.log("tapped")}/>
       </View>
         
       </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background : {
        flex:1,
        justifyContent:"flex-end",
        alignItems: "center"
    },

   logo : {
        width:100,
        height:100,
    },

    logoContainer : {
        position:"absolute",
        top:70,
        alignItems: "center"
    },

    buttonsContainer:{
       padding:20,
       width:"100%" 
    },
    tagline:{
        fontSize:25,
        fontWeight:"600",
        paddingVertical:20

    }
});

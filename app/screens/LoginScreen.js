import React  from 'react';
import { StyleSheet, Image } from 'react-native';
import Screen from './Screen';
import * as Yup from "yup";

import { AppFormField, SubmitButton, AppForm } from '../components/forms';


const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password")
});

export default function LoginScreen() {
  
    return (
       <Screen style = {styles.container}>
           <Image  style = {styles.image} source = {require("../assets/logo2-red.png")}/>

             <AppForm
               initialValues = {{email: "" ,password:""}}
               onSubmit = {values => console.log(values)}
               validationSchema = {validationSchema}

             >
              
                      <AppFormField 
                           autoCapitalize = "none"
                           autoCorrect = {false}
                            placeholder = "Email"
                            icon = "email"
                            name = "email"
                            keyBoardType = "email-address"
                            textContentType = "emailAddress"
                        />
            

                        <AppFormField 
                          autoCapitalize = "none"
                          autoCorrect = {false}
                            placeholder = "Password"
                            icon = "lock"
                            name = "password"
                            keyBoardType = "email-address"
                            textContentType = "password"
                            secureTextEntry = {true}
                        />

                        <SubmitButton title = "login" />



             </AppForm>

           
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

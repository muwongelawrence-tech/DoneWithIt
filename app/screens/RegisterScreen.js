import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Screen from './Screen';
import * as Yup from "yup";

import { AppFormField, SubmitButton, AppForm } from '../components/forms';


const validationSchema = Yup.object().shape({
    name: Yup.string().required().max(50).label("Name"),
    email: Yup.string().required().email().label("Email"),
    password: Yup.string().required().min(4).label("Password")
});

export default function RegisterScreen() {
    return (
         <Screen style = {styles.screen}>

            <AppForm
               initialValues = {{name:"" ,email: "" ,password:""}}
               onSubmit = {values => console.log(values)}
               validationSchema = {validationSchema}

             >
              
                       <AppFormField 
                           autoCapitalize = "none"
                           autoCorrect = {false}
                            placeholder = "Name"
                            icon = "email"
                            name = "name"
                        />

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

                        <SubmitButton title = "Register" />



             </AppForm>

         </Screen>
    )
}

const styles = StyleSheet.create({
    screen: {
        padding:5,
        marginTop:10
    }
})

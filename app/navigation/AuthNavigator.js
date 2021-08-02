import React from 'react';
import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";
import WelcomeScreen from "../screens/WelcomeScreen";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { createStackNavigator } from '@react-navigation/stack';


//const Stack = createNativeStackNavigator();

const Stack = createStackNavigator();

const AuthNavigator = () => {
    return (
     <Stack.Navigator>
        <Stack.Screen name = "welcome" component = { WelcomeScreen } options = {{ headerShown:false }}/>
        <Stack.Screen name = "Login" component = { LoginScreen }/>
        <Stack.Screen name = "Register" component = { RegisterScreen }/>
     </Stack.Navigator>
    );
};

export default AuthNavigator;
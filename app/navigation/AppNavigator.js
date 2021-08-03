import React from 'react';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ListingEditScreen from '../screens/ListingEditScreen';
import FeedNavigator from './FeedNavigator';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import AccountNavigator from './AccountNavigator';
import NewListingButton from './NewListingButton';

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
    return (
       <Tab.Navigator>

            <Tab.Screen 
              name = "Feed" 
               component = {FeedNavigator}
                options = {{ headerShown:false,
                    tabBarIcon: ({color , size}) => <MaterialCommunityIcons name = "home" color = {color} size = {size}/>
                 }}
            />

            <Tab.Screen 
             name = "ListingEdit" 
             component = {ListingEditScreen}
             options = {({navigation}) => (
                {
                    headerShown:false,
                    tabBarButton: () => 
                    <NewListingButton
                      onPress = {() => navigation.navigate("ListingEdit")}
                    />
                   
                }
             )}
            />

            <Tab.Screen 
            name = "Account" 
            component = {AccountNavigator} 
            options = {{ headerShown:false,
                tabBarIcon: ({color , size}) => <MaterialCommunityIcons name = "account" color = {color} size = {size}/>
             }}
             />

       </Tab.Navigator>
    );
};

export default AppNavigator;
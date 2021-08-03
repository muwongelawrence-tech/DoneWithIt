import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ListingScreen from '../screens/ListingScreen';
import ListingDetailsScreen from '../screens/ListingDetailsScreen';

const Stack = createStackNavigator();

const FeedNavigator = () => {
     return(
          <Stack.Navigator  screenOptions = {{ headerShown :false , presentation :"card"}} >
              <Stack.Screen name = "Listings" component = {ListingScreen}/>
              <Stack.Screen name = "ListingDetails" component = {ListingDetailsScreen} />
          </Stack.Navigator>
     );
};

export default FeedNavigator;
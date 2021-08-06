import React, { useEffect } from 'react';
import {  FlatList, StyleSheet, Text} from 'react-native';
import Card from '../components/card';
import colors from '../config/colors';
import listingsApi from '../api/listings';
import routes from "../navigation/routes";
import Screen from './Screen';
import { getListings } from '../api/fakeListings';
import AppText from '../components/AppText';
import AppButton from '../components/AppButton';
import ActivityIndicator from '../components/ActivityIndicator';
import useApi from '../../hooks/useApi';



export default function ListingScreen({ navigation }) {
  //call the useApi hook.
  const newdata = getListings();

  const { request:loadListings , data : listings, loading, error } = useApi();

   useEffect(() => {
          loadListings(newdata);
    } ,[]);

    return (
        <Screen style = {styles.screen}>
            { error ? (
                <>
                <AppText>couldn't retrieve the listings from the server</AppText>
                <AppButton title= "Retry" onPress = { loadListings }/>
                </>
            ):(
                <>
                <ActivityIndicator visible = { loading }/>
                                  
                 <FlatList
                 showsVerticalScrollIndicator = {false}
                    data = {listings}
                    keyExtractor = {listing => listing.id.toString()}
                    renderItem = {({item}) =>
                            <Card
                            title ={item.title}
                            subtitle = {"$" + item.price}
                            image = {item.image}
                            image2 = {item.image2}
                            name = {item.name}
                            description = {item.description}
                            imageUri = {item.imageUri }
                            onPress = { () => navigation.navigate(routes.LISTING_DETAILS , item)}
                            />
                    }
                    /> 

                    </>
            )}
        </Screen>
    );
}

const styles = StyleSheet.create({
    screen:{
        padding:10,
        backgroundColor:colors.light
    }
});

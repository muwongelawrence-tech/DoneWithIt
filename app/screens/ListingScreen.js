import React from 'react';
import { FlatList, ScrollView, StyleSheet, Text, View } from 'react-native';
import Card from '../components/card';
import colors from '../config/colors';
import Screen from './Screen';

const listings = [
    {
        id:1,
        title:"red jacket for sell",
        price : 100,
        image: require("../assets/red.jpeg"),
        image2 : require("../assets/ml.jpg"),
        name : "Muwonge Lawrence",
        description : "programmer",
    },

    {
        id:2,
        title:"Catch in great Condition",
        price : 1000,
        image: require("../assets/red.jpeg"),
        image2 : require("../assets/ml.jpg"),
        name : "Muwonge Lawrence",
        description : "programmer",
    },

    {
        id:3,
        title:"bowels",
        price : 100,
        image: require("../assets/red.jpeg"),
        image2 : require("../assets/ml.jpg"),
        name : "Muwonge Lawrence",
        description : "programmer",
    },
]

export default function ListingScreen({navigation}) {
    return (
        <Screen style = {styles.screen}>
        
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
                        onPress = { () => navigation.navigate("ListingDetails" , item)}
                        />
                }
                />
        
        </Screen>
    );
}

const styles = StyleSheet.create({
    screen:{
        padding:10,
        backgroundColor:colors.light
    }
});

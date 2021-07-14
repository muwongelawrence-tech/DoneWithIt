import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Card from '../components/card';

export default function ListingDetailsScreen() {
    return (
        <View style = {styles.container}>

              <Card title = "bowel" subtitle= "$6.80"
                image = {require("../assets/red.jpeg")}
                image2 = {require ("../assets/ml.jpg")}
                name = "Muwonge Lawrence"
                description = "5 listings"
              />
                <Card title = "bowel" subtitle= "$3.20"
                image = {require("../assets/red.jpeg")}
                image2 = {require ("../assets/ml.jpg")}
                name = "Muwonge Lawrence"
                description = "5 listings"
              />
                <Card title = "furniture" subtitle= "$5.00"
                image = {require("../assets/red.jpeg")}
                image2 = {require ("../assets/ml.jpg")}
                name = "Muwonge Lawrence"
                description = "5 listings"
              />

            <Card title = "furniture" subtitle= "$5.00"
                image = {require("../assets/red.jpeg")}
                image2 = {require ("../assets/ml.jpg")}
                name = "Muwonge Lawrence"
                description = "5 listings"
              />
        </View>
    )
}

const styles = StyleSheet.create({
    container :{
        backgroundColor:"#f8f4f4",
        padding:20,
        paddingTop:100,
    }
});

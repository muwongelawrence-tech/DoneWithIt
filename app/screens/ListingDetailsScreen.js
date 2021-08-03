import React from 'react'
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import colors from '../config/colors';
import Screen from './Screen';

export default function ListingDetailsScreen({ route }) {
  const listing = route.params;

  return (
    <Screen style = {styles.screen}>
      <ScrollView
        showsVerticalScrollIndicator = {false}
      >
        <View>
            <Image style={styles.image} source={listing.image} />
             <View style={styles.detailsContainer}>
              <Text style={styles.title}>{listing.title}</Text>
              <Text style={styles.price}>${listing.price}</Text>
            </View>


            <View style={styles.userContainer}>
              <Image style = {styles.userImage} source = {listing.image2} />
                 <View style ={styles.userDetails}>
                     <Text>{listing.name}</Text>
                     <Text>{listing.description}</Text>
                 </View>
            </View>

        </View>
      </ScrollView>
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding:5
  },
  userImage : {
     width:60,
     height:60,
     borderRadius:30,
     marginRight:5
  },
  userDetails:{
     padding:10,
  },
  detailsContainer: {
    padding: 20,
  },
  image: {
    width: "100%",
    height: 300,
  },
  price: {
    color: colors.secondary,
    fontWeight: "bold",
    fontSize: 20,
    marginVertical: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "500",
  },
  userContainer: {
    flexDirection: "row",
    marginVertical: 40,
  },
});

import React from 'react'
import { Image, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native'
import colors from '../config/colors';

export default function Card({title,subtitle,image,image2,name,description ,onPress}) {
    return (
          <TouchableWithoutFeedback onPress = {onPress}>
            <View style = {styles.card}>
                <Image  style ={styles.image} source = {image}/>
                <View style = {styles.detailsContainer}>
                <Text style={styles.title}>{title}</Text>
                <Text style = {styles.subtitle}>{subtitle}</Text>
                </View>
                
                <View style = {styles.seller}>
                <Image  style ={styles.image2} source = {image2}/>
                    <View>
                        <Text style = {styles.name}>{name}</Text>
                        <Text style = {styles.description}>{description}</Text>
                    </View>
                </View>
            </View>
          </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    card:{
        borderRadius:15,
        backgroundColor:colors.white,
        marginBottom:20,
        overflow: "hidden"
    },

    image:{
         width:"100%",
         height:200,
    },
    detailsContainer :{
        padding:20,

    },
    title:{
      marginBottom:7  
    },
    subtitle:{
        color:"blue",
        fontWeight:"bold"
    },

    seller:{
        flexDirection:"row",
        marginVertical:10,
        marginLeft:10
    },

    image2 :{
       width:70,
       height:70,
       borderRadius:35,
       marginRight:10  
    },
    name:{

        fontWeight:"500",

    },

    description:{
        color: "#6e6969"
    }

});

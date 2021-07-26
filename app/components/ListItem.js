import React from 'react';
import { Image, StyleSheet, Text, TouchableHighlight, View } from 'react-native';
import { Swipeable } from 'react-native-gesture-handler';
import {MaterialCommunityIcons} from "@expo/vector-icons";
import colors from '../config/colors';

export default function ListItem({title,description,image,onPress,renderRightActions,IconComponent}) {
    return (
        <Swipeable 
           renderRightActions = {renderRightActions}
        >
            <TouchableHighlight 
                underlayColor = {colors.light}
                onPress = {onPress}>
                
                <View style = {styles.container}>
                    {IconComponent}

                    {image && <Image  style ={styles.image} source = {image}/>}

                    <View style ={styles.messageDetails}>
                        <Text style = {styles.title} numberOfLines = {1}>{title}</Text>
                        { description && <Text style = {styles.description}numberOfLines = {2}>{description}</Text> }
                    </View>

                    <MaterialCommunityIcons name = "chevron-right" color = {colors.medium} size = {25}/>
                    
                </View>

            </TouchableHighlight >
        </Swipeable>
    );
}

const styles = StyleSheet.create({
    
    container:{
        flexDirection:"row",
        // marginVertical:10,
        marginLeft:10,
        padding:15,
        backgroundColor:colors.white,
        alignItems : "center"
    },

    image :{
        width:70,
        height:70,
        borderRadius:35, 
    },

    title:{

        fontWeight:"500",

    },

    description:{
        color: "#6e6969"
    },
    messageDetails :{
        marginLeft :10,
        justifyContent:"center",
        flex: 1
    }

});


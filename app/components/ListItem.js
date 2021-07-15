import React from 'react';
import { Image, StyleSheet, Text, TouchableHighlight, TouchableOpacity, View } from 'react-native';
import { Swipeable } from 'react-native-gesture-handler';
import colors from '../config/colors';

export default function ListItem({title,description,image,onPress,renderRightActions}) {
    return (
        <Swipeable 
           renderRightActions = {renderRightActions}
        >
            <TouchableHighlight 
                underlayColor = {colors.light}
                onPress = {onPress}>
                
                <View style = {styles.container}>
                <Image  style ={styles.image} source = {image}/>
                <View style ={styles.messageDetails}>
                    <Text style = {styles.title}>{title}</Text>
                    <Text style = {styles.description}>{description}</Text>
                </View>
                </View>

            </TouchableHighlight >
        </Swipeable>
    );
}

const styles = StyleSheet.create({
    
    container:{
        flexDirection:"row",
        marginVertical:10,
        marginLeft:10,
        padding:15
    },

    image :{
        width:70,
        height:70,
        borderRadius:35,
        marginRight:10  
    },

    title:{

        fontWeight:"500",

    },

    description:{
        color: "#6e6969"
    },
    messageDetails :{
        paddingTop:20
    }

});


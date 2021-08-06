import React from 'react';
import { Modal, StyleSheet, View } from 'react-native';

import  * as Progress from "react-native-progress";


export default function UploadScreen({progress = 0 ,visible = false}) {
    return (
        <Modal visible = {visible}>
            <View style = {styles.container}>
                <Progress.Bar
                  progress = {progress}
                  color = {['red']}
                  width = {200}
                />
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    container:{

         alignItems: "center",
         justifyContent : "center",
         flex : 1
    }
});

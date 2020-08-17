import React from 'react'
import {Text, View, StyleSheet } from 'react-native'

const BoxScreen = () =>{
    return (
        <View style= {styles.viewStyle}>
            <Text style = {styles.text1Style}>Child #1</Text>
            <Text style = {styles.text2Style}>Child #2</Text>
            <Text style = {styles.text3Style}>Child #3</Text>
            
        </View>
    )
}

const styles = StyleSheet.create({
        viewStyle :{
            marginTop: 50,
            borderWidth : 3,
            borderColor: 'black',
            height: 200, 
            alignItems : 'center'
        },
        text1Style :{
            borderWidth : 3,
            borderColor : 'red',
        },
        text2Style :{
            borderWidth : 3,
            borderColor : 'red',
            alignSelf : 'flex-end'
        },        
        text3Style :{
            borderWidth : 3,
            borderColor : 'red',
        },
});

export default BoxScreen;
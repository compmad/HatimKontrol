import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import {Button,Input,Image} from 'react-native-elements';
import { StatusBar } from 'expo-status-bar';
import { KeyboardAvoidingView } from 'react-native';
import { useState } from 'react';
import { auth, provider } from "../firebase"

const Giris = ({navigation}) => {    
    const girisYap = () => {
        navigation.navigate('Kayit');
    }

    return (
        <KeyboardAvoidingView style={styles.container}>
            <StatusBar style="light"/>
            <Image 
                source={require('../assets/images/image.png')}
                style={{width:200, height:200}}/>            
            <Button title="Telefon İle Giriş" containerStyle={styles.button} onPress={girisYap}/>
            <View style={{height:100}}></View>
        </KeyboardAvoidingView>
    )
}

export default Giris

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems:"center",
        justifyContent: "center",
        padding: 10,
        backgroundColor:"white",
    },    
    button:{
        width:300,
        paddingTop: 10, 
    }

})

import React, { useState } from 'react'
import { StyleSheet, Text, View, Modal, TouchableOpacity } from 'react-native';
import {Button,Input} from 'react-native-elements';
import { db,auth } from '../../firebase';
import Icon from "react-native-vector-icons/FontAwesome5";
import  firebase from 'firebase';

const KuraniKerimHatimYonetimi = () => {
    const [modalGoster,setModalGoster]=useState(false);
    const [hatimAdi,setHatimAdi]=useState("");
    const [hatimSure,setHatimSure]=useState("");
    const kuranHatmiEkle=async ()=>{
        await db.collection('hatimler').add({
            hatimAdi: hatimAdi, 
            user: auth.currentUser.uid,
            sure:hatimSure 
        }).then(()=>{
            
        }).catch(error=> alert(error));
    }
    const hatimEkleModalGoster=()=>{
        //setHatimAdi("");
        setModalGoster(true);
    }
    return (
        <View>
                <View style={styles.hatimEkle}>
                
                <Button style={styles.button} title="Ekle"
                icon={
                    <Icon
                    name="quran"
                    size={20}
                    color="white"
                    style={styles.icon}
                    />
                } 
                containerStyle={styles.button} onPress={hatimEkleModalGoster}/>
            </View>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalGoster}
                onRequestClose={() => {
                //Alert.alert("Modal has been closed.");
                setModalGoster(!modalGoster);
                }}
            >
                <TouchableOpacity 
                    style={styles.container} 
                    activeOpacity={1} 
                    onPressOut={() => {setModalGoster(false)}}
                >
                    <View style={styles.centeredView}>
                        <View style={styles.inputContainer}>
                            <Input style={styles.modalInput} value={hatimAdi} placeholder="Hatim Adı" onChangeText={
                            (hatimAdi) => setHatimAdi(hatimAdi) } />
                            <Input style={styles.modalInput} value={hatimSure} placeholder="Hatim Süresi" onChangeText={
                            (hatimSure) => setHatimSure(hatimSure) } />
                            <Button title="Hatim Ekle" 
                                containerStyle={styles.button} onPress={kuranHatmiEkle}
                            />
                        </View> 
                    
                    </View>
                </TouchableOpacity>
            </Modal>
        </View>

        
    )
}

export default KuraniKerimHatimYonetimi

const styles = StyleSheet.create({
    containerStyle: {
        flex: 1,
        backgroundColor : "white"
    },
    hatimEkle: {
        //flexDirection:"row",
        alignItems:"center",
        justifyContent:"flex-start",
        //width:"80%",
        padding:10,
    },
    hatimInput:{
        bottom:0,
        height:40,
        flex:1,
        marginRight: 15,
        backgroundColor: "#ECECEC",
        padding: 10,
        color: "grey",
        borderRadius: 30
    },
    headerText: {
      fontWeight:"900",
      color:"#FBFBFB",
      padding: 10
    },
    centeredView: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      marginTop: 22
      },
  
  modalInput:{
      width:200,
  },
  container:{
      flex:1,
      alignItems:'center',
      justifyContent:'center',
      padding:10
  },
  inputContainer:{
      width:300,
      alignItems: "center",
      backgroundColor:"white",
      padding:35,
      borderRadius: 20
  },
  button:{
    width: 200,
    //paddingRight:10,
    //marginTop: 10
  },
  icon:{
    padding:5
  },
})

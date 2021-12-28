import React,{ useLayoutEffect} from 'react'
import { StyleSheet, Text, View } from 'react-native'
import {Button,Input,Image} from 'react-native-elements';
import Icon from "react-native-vector-icons/FontAwesome5";
//import { openDatabase } from 'react-native-sqlite-storage';



const Yonlendirme = ({navigation}) => {
  useLayoutEffect(()=>{
    navigation.setOptions({
      title:"Hatimci",
      headerBackTitleVisible: false,
      headerTitleAlign: "center",
      headerTitle: ()=>(
          <View
              style={{
                  flexDirection: 'row',
                  alignItems:'center'
              }}
          >
              <Icon
                  name="quran"
                  size={20}
                  color="white"
                  style={styles.icon}
                  />
              <Icon
                  name="readme"
                  size={20}
                  color="white"
                  style={styles.icon}
                  />  
              <Icon
                  name="hourglass"
                  size={20}
                  color="white"
                  style={styles.icon}
                  />      
              <Text style={styles.headerText}>Hatimci</Text>
          </View>
      )
    });
  },[navigation]);  
    const KuranHatmiAc = () => {
        navigation.navigate('KuraniKerimTab');
    }
    const SureHatmiAc = () => {
        navigation.navigate("SureHatimListesi");
    }
    const SayiHatmiAc = () => {
        navigation.navigate("SayiHatimListesi");
    }
    return (
        <View style={styles.container}>
            <Image 
                source={require('../assets/images/image.png')}
                style={{width:300, height:300, padding:50}}/>
            <Button title="Kuran-ı Kerim             " 
                icon={
                    <Icon
                    name="quran"
                    size={20}
                    color="white"
                    style={styles.icon}
                    />
                } 
                containerStyle={styles.kuranHatmiButton} onPress={KuranHatmiAc}/>
            <Button title="Yasin/Fetih/Rahman..." 
                icon={
                    <Icon
                    name="readme"
                    size={20}
                    color="white"
                    style={styles.icon}
                    />
                } 
                containerStyle={styles.button} onPress={SureHatmiAc}/>    
            <Button title="Tevhid/İhlas              " 
                icon={
                    <Icon
                    name="hourglass"
                    size={20}
                    color="white"
                    style={styles.icon}
                    />
                } 
                containerStyle={styles.button} onPress={SayiHatmiAc}/>  
        </View>
    )
}

export default Yonlendirme

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems:"center",
        justifyContent: "center",
        padding: 10,
        backgroundColor:"white",
    },
    kuranHatmiButton:{
        width:300,
        paddingTop: 10,
    },
    button:{
      width:300,
      paddingTop: 10,
      opacity: 0, height: 0
  },
    icon:{
        paddingRight:10,
    },
    headerText: {
      fontWeight:"900",
      color:"#FBFBFB",
      padding: 10
    }
    
})

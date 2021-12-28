import 'react-native-gesture-handler';

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Giris from './screens/Giris';
import {createStackNavigator} from '@react-navigation/stack';
import Kayit from './screens/Kayit';
import AnaSayfa from './screens/AnaSayfa';
import Yonlendirme from './screens/Yonlendirme';
import KuraniKerimTab from './screens/KuraniKerim/KuraniKerimTab';

const Stack = createStackNavigator();
const globalScreenOptions={
  headerStyle :{backgroundColor:"#2C6BED"},
  headerTitleStyle:{color:"white"},
  headerTintColor:"white"
};
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={globalScreenOptions}>
        <Stack.Screen name="Giris" component={Giris}/>     
        <Stack.Screen name="Kayit" component={Kayit}/>
        <Stack.Screen name="AnaSayfa" component={AnaSayfa}/>  
        <Stack.Screen name="Yonlendirme" component={Yonlendirme}/>
        <Stack.Screen name="KuraniKerimTab" component={KuraniKerimTab}/>       
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

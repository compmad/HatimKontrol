import React, { useLayoutEffect, useState } from 'react'
import { StyleSheet, Text, View, Dimensions } from 'react-native'
import Icon from "react-native-vector-icons/FontAwesome5";
import { TabView, SceneMap } from 'react-native-tab-view';
import KuraniKerimCuzlerim from './KuraniKerimCuzlerim';
import KuraniKerimHatimYonetimi from './KuraniKerimHatimYonetimi';
import KuraniKerimPaylasim from './KuraniKerimPaylasim';
const initialLayout = { width: Dimensions.get('window').width };

const KuraniKerimTab = ({navigation}) => {
    useLayoutEffect(()=>{
        navigation.setOptions({
          title:"Hatim Listesi",
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
                  <Text style={styles.headerText}> Kuran-ı Kerim Hatmi</Text>
              </View>
          )
        });
      },[navigation]);
    const [index, setIndex] = useState(0);
    const [routes] = useState([
        { key: 'first', title: 'Hatim' },
        { key: 'second', title: 'Cüz' },
        { key: 'third', title: 'Paylaşım' },
    ]);
    const renderScene = SceneMap({
        first: birinciTab,
        second: ikinciTab,
        third: ucuncuTab,
      });
    return (
        <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={initialLayout}
        />
    )
}
const birinciTab = () => (
    <KuraniKerimHatimYonetimi></KuraniKerimHatimYonetimi>
  );
  
const ikinciTab = () => (
    <KuraniKerimCuzlerim></KuraniKerimCuzlerim>
);
const ucuncuTab = () => (
    <KuraniKerimPaylasim></KuraniKerimPaylasim>
);
export default KuraniKerimTab

const styles = StyleSheet.create({
    scene: {
        flex: 1,
      },
})

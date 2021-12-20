import { StyleSheet, Text, View } from 'react-native';
import * as Contacts from 'expo-contacts';
import * as React from 'react';

const AnaSayfa = ({navigation}) => {
    [data,setData] = React.useState();
    React.useEffect(() => {
        (async () => {
          const { status } = await Contacts.requestPermissionsAsync();
          if (status === 'granted') {
            const { contactData } = await Contacts.getContactsAsync({
              fields: [Contacts.Fields.PhoneNumbers],
            });
            setData(contactData);
            if (contactData.length > 0) {
              const contact = data[0];
              console.log(contact);
            }
          }
        })();
      }, []);
    
    return (
        <View>
            <Text></Text>
        </View>
    )
}

export default AnaSayfa

const styles = StyleSheet.create({})

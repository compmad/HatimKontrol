import { StyleSheet, Text, View } from 'react-native';
import * as Contacts from 'expo-contacts';
import * as React from 'react';

const AnaSayfa = ({navigation}) => {
    [phoneNumbers,setPhoneNumbers] = React.useState([]);
    React.useEffect(() => {
        (async () => {
          const { status } = await Contacts.requestPermissionsAsync();
          if (status === 'granted') {
            const  contactData   = await Contacts.getContactsAsync({
              fields: [Contacts.Fields.PhoneNumbers],
            });
            phoneNumbers = contactData.data.map(contact => contact.phoneNumbers).flat();
            setPhoneNumbers(phoneNumbers);            
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

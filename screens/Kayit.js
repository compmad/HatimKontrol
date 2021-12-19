
import React, { useRef, useState } from 'react';
import { TouchableOpacity, Text, TextInput, View, StyleSheet } from 'react-native';
import {Button,Input,Image} from 'react-native-elements';
import { FirebaseRecaptchaVerifierModal } from 'expo-firebase-recaptcha';
import Constants from 'expo-constants';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import {firebase,firebaseConfig, auth} from '../firebase';

const Kayit = ({navigation}) => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [verificationId, setVerificationId] = useState();
  const [verificationCode, setVerificationCode] = useState();
  const recaptchaVerifier = useRef(null);

  const sendVerification = async () => {
    // The FirebaseRecaptchaVerifierModal ref implements the
    // FirebaseAuthApplicationVerifier interface and can be
    // passed directly to `verifyPhoneNumber`.
    
      const phoneProvider = new auth.PhoneAuthProvider();
      const verificationId = await phoneProvider.verifyPhoneNumber(
        phoneNumber,
        recaptchaVerifier.current
      );
      setVerificationId(verificationId);
      showMessage({
        text: "Telefonunuza onay kodu gönderildi.",
      })
    }

  const confirmCode = async () => {
    try {
      const credential = auth.PhoneAuthProvider.credential(
        verificationId,
        verificationCode
      );
      await auth().signInWithCredential(credential);
      showMessage({ text: "Telefon onay işlemi tamamlandı 👍" });
    } catch (err) {
      showMessage({ text: `Error: ${err.message}`, color: "red" });
    }
  }

  return (
    <KeyboardAwareScrollView contentContainerStyle={styles.container}>
      <View>
        <FirebaseRecaptchaVerifierModal
          ref={recaptchaVerifier}
          firebaseConfig={firebaseConfig}
        />
        <View style={styles.inputContainer}>
          <Input
            placeholder="Telefon Numarası"
            onChangeText={setPhoneNumber}
            keyboardType="phone-pad"
            autoCompleteType="tel"
            style={styles.telefonText}
          />
        </View>

        <Button
          containerStyle={styles.sendCodeButton}
          onPress={sendVerification}
          title="Onay Kodu Gönder"
        />
        <View style={styles.inputContainer}>
          <Input
            placeholder="Onay Kodu"
            onChangeText={setVerificationCode}
            keyboardType="number-pad"
            style={styles.textInput}
          />
        </View>
        <Button containerStyle={styles.verifyButton} onPress={confirmCode}title="Kodu Doğrula"/>
      </View>
    </KeyboardAwareScrollView>
  );
}

export default Kayit

const styles = StyleSheet.create({
  container:{
    flex: 1,
    alignItems:"center",
    justifyContent: "center",
    padding: 10,
    backgroundColor:"white",
  },
  verifyButton:{
      width:300,
      paddingTop: 10,
      //backgroundColor:"#2535AB",
      alignItems:"center",
      justifyContent: "center", 
  },
  
  sendCodeButton:{
    width:300,
    paddingTop: 10,
    //backgroundColor:"whitesmoke",
    alignItems:"center",
    justifyContent: "center",
  },
  inputContainer:{
    width:300
  },
  

});

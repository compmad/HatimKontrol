import firebase from 'firebase';
const firebaseConfiguration = {
    apiKey: "AIzaSyDh-fBtNNTdjQY2y_7Iba8CpeW0b59i-UA",
    authDomain: "hatimkontrol.firebaseapp.com",
    projectId: "hatimkontrol",
    storageBucket: "hatimkontrol.appspot.com",
    messagingSenderId: "133636307266",
    appId: "1:133636307266:web:5072261e74b2e4040370db"
  };

  const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfiguration) : firebase.app();

  const db = app.firestore();
  const auth = app.auth();
  const provider = new firebase.auth.PhoneAuthProvider();

  export default {db, auth, provider, firebaseConfiguration};
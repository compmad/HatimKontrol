import firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyDh-fBtNNTdjQY2y_7Iba8CpeW0b59i-UA",
    authDomain: "hatimkontrol.firebaseapp.com",
    projectId: "hatimkontrol",
    storageBucket: "hatimkontrol.appspot.com",
    messagingSenderId: "133636307266",
    appId: "1:133636307266:web:5072261e74b2e4040370db"
  };
  let app;
  console.log(firebase.apps);
  if(firebase.apps.length===0){
    app=firebase.initializeApp(firebaseConfig);
  }else{
    app=firebase.app;
  } 
  const db = app.firestore();
  const auth = firebase.auth();

  export {db , auth, firebaseConfig};
import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCXV-URBfb1Bl9Id58TieoQUIK9Sb-h97k",
    authDomain: "react-redux-96be7.firebaseapp.com",
    projectId: "react-redux-96be7",
    storageBucket: "react-redux-96be7.appspot.com",
    messagingSenderId: "618796227227",
    appId: "1:618796227227:web:1a18ca1f71f3e32730443e"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  //export
  export const auth = firebase.auth();

  export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
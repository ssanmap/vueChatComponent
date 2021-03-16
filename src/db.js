import firebase from 'firebase/app';
import 'firebase/database';

const  config = {
    apiKey: "AIzaSyCaWodNkApTcnpv5FKYYl4vAO7vHFBuPaI",
    authDomain: "chatvue-7e5c7.firebaseapp.com",
    projectId: "chatvue-7e5c7",
    storageBucket: "chatvue-7e5c7.appspot.com",
    messagingSenderId: "856974073088",
    appId: "1:856974073088:web:aeadaa4a1b332dbbb4e7e5"
  };
  // Initialize Firebase
  const db = firebase.initializeApp(config);

  export default db;
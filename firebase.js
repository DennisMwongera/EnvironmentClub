import firebase from '@firebase/app';
import '@firebase/auth';
import '@firebase/firestore';

firebase.initializeApp({
    apiKey: "AIzaSyAptOZusG-oADovALXCLWz5Fufx_9GbzKs",
    authDomain: "oi-environment-club.firebaseapp.com",
    projectId: "oi-environment-club",
    storageBucket: "oi-environment-club.appspot.com",
    messagingSenderId: "365186811317",
    appId: "1:365186811317:web:3c02b44f62bbffc9d285fc",
    measurementId: "G-BL0LJKLMKP"
});

export default firebase;

//https://firebase.google.com/docs/firestore/security/get-started#auth-required
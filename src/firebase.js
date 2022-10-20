import { initializeApp } from 'firebase/app';

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
    apiKey: "AIzaSyCbwzFujPbgV2CYxzymEXZGoeFMQ1egl-0",
    authDomain: "snappfood-17b47.firebaseapp.com",
    projectId: "snappfood-17b47",
    storageBucket: "snappfood-17b47.appspot.com",
    messagingSenderId: "5650371718",
    appId: "1:5650371718:web:7fdc5aa2a75abb30382d07",
    measurementId: "G-7E4RF0J1G4"
};

 export  const firebaseapp = initializeApp(firebaseConfig);
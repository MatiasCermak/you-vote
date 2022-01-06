import { initializeApp } from "firebase/app";

// Optionally import the services that you want to use
//import {...} from "firebase/auth";
//import {...} from "firebase/database";
//import {...} from "firebase/firestore";
//import {...} from "firebase/functions";
//mport {...} from "firebase/storage";

// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyC4ObHf-Totc-44VRHKPzkdUsD72_rfshg",
    authDomain: "react-native-youvote.firebaseapp.com",
    databaseURL: "https://react-native-youvote-default-rtdb.firebaseio.com",
    projectId: "react-native-youvote",
    storageBucket: "react-native-youvote.appspot.com",
    messagingSenderId: "769538069644",
    appId: "1:769538069644:web:2e67cc459f1ca4bf85d7a9",
    measurementId: "G-469B46SLJN",
};

initializeApp(firebaseConfig);

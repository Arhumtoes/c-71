import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
const firebaseConfig = {
    apiKey: "AIzaSyDj_LnBHVL41BDb7Wq3_8ijgBODHw-c3vc",
    authDomain: "e-ride-e498e.firebaseapp.com",
    projectId: "e-ride-e498e",
    storageBucket: "e-ride-e498e.appspot.com",
    messagingSenderId: "633744958967",
    appId: "1:633744958967:web:dbf0a208cd26eaf588faf2"
  };
//
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();

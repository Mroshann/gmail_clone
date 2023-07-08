import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyANOqV67kYLrPRicJZtnkVLCMt8xwVGzV0",
    authDomain: "clone-ac13e.firebaseapp.com",
    projectId: "clone-ac13e",
    storageBucket: "clone-ac13e.appspot.com",
    messagingSenderId: "396336252610",
    appId: "1:396336252610:web:9a90ec3d546f59f0845d5b",
    measurementId: "G-4KWJCFSQQJ"
  };

  
  const firebaseApp = firebase.initializeApp(firebaseConfig);
     const db = firebaseApp.firestore();
     const auth = firebase.auth();

  const provider = new firebase.auth.GoogleAuthProvider();
  export {db,auth,provider};
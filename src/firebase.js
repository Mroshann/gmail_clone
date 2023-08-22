import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
import 'firebase/compat/auth'



const firebaseConfig = {
    apiKey: "AIzaSyAbC2_EHrSQeFNb5Ebh10YLDnwHvwuJV3g",
    authDomain: "clone-b4079.firebaseapp.com",
    projectId: "clone-b4079",
    storageBucket: "clone-b4079.appspot.com",
    messagingSenderId: "145077174395",
    appId: "1:145077174395:web:cf2a8fb73232dc5789a2de"
  };


firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db , auth , provider};
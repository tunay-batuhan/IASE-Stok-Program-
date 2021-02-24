import firebase from "firebase/app";
import "firebase/auth";
import "firebase/storage";
import "firebase/database";
import "firebase/firestore";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyD64gKQ3Oc-4X5_Put3amIz5GLaOsyIXoM",
  authDomain: "iase-b6e77.firebaseapp.com",
  databaseURL: "https://iase-b6e77.firebaseio.com",
  projectId: "iase-b6e77",
  storageBucket: "iase-b6e77.appspot.com",
  messagingSenderId: "457570221017",
  appId: "1:457570221017:web:2c3e0dc632e6e336cbf7c8",
  measurementId: "G-0641JW84JF",
});

const db = firebaseApp.firestore();

export default db;

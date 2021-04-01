import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyB3wnnafZ9dtXoyOw2-hlv_-s8hlRo9A7c",
  authDomain: "e-elbakrifaouzi.firebaseapp.com",
  projectId: "e-elbakrifaouzi",
  storageBucket: "e-elbakrifaouzi.appspot.com",
  messagingSenderId: "470953850993",
  appId: "1:470953850993:web:76cde84e063f6265d0c3d0",
  measurementId: "G-Y34J6W3HHB",
};
const fireApp = firebase.initializeApp(firebaseConfig);
const db = fireApp.firestore();

export default db;

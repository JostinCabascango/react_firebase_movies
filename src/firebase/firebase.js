// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDEFXVZTFoWZdEXTktHl9vt-qsCd_IvKf0",
  authDomain: "react-firebase-movies.firebaseapp.com",
  databaseURL: "https://react-firebase-movies-default-rtdb.firebaseio.com",
  projectId: "react-firebase-movies",
  storageBucket: "react-firebase-movies.appspot.com",
  messagingSenderId: "19234306517",
  appId: "1:19234306517:web:4b28ee6860e00daf2b655c",
  measurementId: "G-800P94J4H4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
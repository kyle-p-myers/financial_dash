// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFireStore} from "firebase/firestore";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA0pAzGUgpcfCpK6mrUyV4FRda2L739YHE",
  authDomain: "pidge-5c02e.firebaseapp.com",
  projectId: "pidge-5c02e",
  storageBucket: "pidge-5c02e.appspot.com",
  messagingSenderId: "38642666038",
  appId: "1:38642666038:web:2757c1959fea7900146697",
  measurementId: "G-M7DN0SK1GD"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA_bCeg_jhGljPE5ivIxYiRP_txlfLakGQ",
  authDomain: "pidgeio-d6bf5.firebaseapp.com",
  projectId: "pidgeio-d6bf5",
  storageBucket: "pidgeio-d6bf5.appspot.com",
  messagingSenderId: "427547050703",
  appId: "1:427547050703:web:6b9f00496e70cb3d716dba"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
import { initializeApp, getApps, getApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import { getFirestore, collection, getDocs } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA_bCeg_jhGljPE5ivIxYiRP_txlfLakGQ",
  authDomain: "pidgeio-d6bf5.firebaseapp.com",
  projectId: "pidgeio-d6bf5",
  storageBucket: "pidgeio-d6bf5.appspot.com",
  messagingSenderId: "427547050703",
  appId: "1:427547050703:web:6b9f00496e70cb3d716dba"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig): getApp()

const auth = getAuth(app);

const db = getFirestore(app);


export { auth, app, db };
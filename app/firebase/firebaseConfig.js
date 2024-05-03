import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import { getFirestore } from "firebase/firestore";

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

const auth = getAuth(app);

export const db = getFirestore(app);


export { auth, app };
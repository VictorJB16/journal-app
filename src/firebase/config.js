// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import {getFirestore} from 'firebase/firestore/lite'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDi1eqZt-v7MEhcQZNSNHSICufPy89SZH0",
  authDomain: "react-cursos-ebdeb.firebaseapp.com",
  projectId: "react-cursos-ebdeb",
  storageBucket: "react-cursos-ebdeb.appspot.com",
  messagingSenderId: "212924000139",
  appId: "1:212924000139:web:41c71ed210c8425f23f18e"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth( FirebaseApp );
export const FirebaseDB = getFirestore( FirebaseApp );  
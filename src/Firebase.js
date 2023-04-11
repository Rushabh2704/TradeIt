// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyDbDZb1OlobLxLx980YFMMocxpFNphdbgY",
    authDomain: "tradeit-b1965.firebaseapp.com",
    projectId: "tradeit-b1965",
    storageBucket: "tradeit-b1965.appspot.com",
    messagingSenderId: "818120992380",
    appId: "1:818120992380:web:cbe031dc9146064e34cbf9",
    measurementId: "G-KY5FM0SCXJ"
  };
  

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore();
export const storage = getStorage();
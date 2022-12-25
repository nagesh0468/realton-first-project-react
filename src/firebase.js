// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {  getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAT7QLe1PSRd327-UbCA3IY767csks-g78",
  authDomain: "realtor-a1a01.firebaseapp.com",
  projectId: "realtor-a1a01",
  storageBucket: "realtor-a1a01.appspot.com",
  messagingSenderId: "318979506382",
  appId: "1:318979506382:web:0e5c339a15b1b85b84d09f"
};

// Initialize Firebase
initializeApp(firebaseConfig);
const db = getFirestore();
export default db;
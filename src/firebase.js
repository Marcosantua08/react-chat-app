// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyABSrhmaD0JKf8QR6ybpTWqEoZDBeY8j-Y",
  authDomain: "chat-chatan-963c0.firebaseapp.com",
  projectId: "chat-chatan-963c0",
  storageBucket: "chat-chatan-963c0.appspot.com",
  messagingSenderId: "344274126487",
  appId: "1:344274126487:web:a7c863cc0fcf7bff0d4bd2",
  measurementId: "G-QLYSKVKQPW"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDIRcsAhBscqLW1Q6iZD7AtqJXCMoM5Rkg",
    authDomain: "codepthchat-f175a.firebaseapp.com",
    projectId: "codepthchat-f175a",
    storageBucket: "codepthchat-f175a.appspot.com",
    messagingSenderId: "1009667120239",
    appId: "1:1009667120239:web:64ca4d6288a952d407419a"
  };

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
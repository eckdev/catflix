// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDPkPECmWeTTEvLNT6xhwFnpeU4keuoNlk",
  authDomain: "catfliks.firebaseapp.com",
  projectId: "catfliks",
  storageBucket: "catfliks.appspot.com",
  messagingSenderId: "315751150862",
  appId: "1:315751150862:web:06c745b81edf8ae2a1135f",
  measurementId: "G-XSTE3NJXEJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
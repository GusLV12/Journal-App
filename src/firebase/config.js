// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyALAJ2Gpq1UFSlmzB7KzLUbcv2Lm67iQ7I",
  authDomain: "journal-18aa9.firebaseapp.com",
  projectId: "journal-18aa9",
  storageBucket: "journal-18aa9.appspot.com",
  messagingSenderId: "870635961368",
  appId: "1:870635961368:web:df47dff55d9b3b4e4a176d"
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(firebaseApp);
export const firebaseStore = getFirestore(firebaseApp);
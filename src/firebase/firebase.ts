// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCrwOHRYam-KDJuusVypyripCS59cJUp3k",
  authDomain: "faqapp-5b73e.firebaseapp.com",
  projectId: "faqapp-5b73e",
  storageBucket: "faqapp-5b73e.firebasestorage.app",
  messagingSenderId: "283753880253",
  appId: "1:283753880253:web:03addc25b0e7ab46d4f5d4",
  measurementId: "G-NE74QZ67KM",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCsxhqhX4-iTfiVnAHQDCieOXkVFnFrEzM",
  authDomain: "twiter-e2758.firebaseapp.com",
  projectId: "twiter-e2758",
  storageBucket: "twiter-e2758.appspot.com",
  messagingSenderId: "272377336112",
  appId: "1:272377336112:web:654b3dd84040e1011e38f5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();

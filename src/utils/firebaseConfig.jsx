// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA3Bzzb5Hpp6Z-6QsJWx_r3y8LSIywwJZM",
  authDomain: "hello-d6e6a.firebaseapp.com",
  databaseURL: "https://hello-d6e6a-default-rtdb.firebaseio.com",
  projectId: "hello-d6e6a",
  storageBucket: "hello-d6e6a.appspot.com",
  messagingSenderId: "1050917083300",
  appId: "1:1050917083300:web:070e5e02e7f91bb0b6ee31",
  measurementId: "G-T0CN5K1YM5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const database = getDatabase(app);
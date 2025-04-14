// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFireStore } from "@firebase/firestore";
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBB0f73lhLtBZts6kTsGdHbLRwzPKhPvkg",
  authDomain: "doublet-sod.firebaseapp.com",
  projectId: "doublet-sod",
  storageBucket: "doublet-sod.firebasestorage.app",
  messagingSenderId: "104747672882",
  appId: "1:104747672882:web:c31f2a772c313c1c76632b",
  measurementId: "G-VHN6J2QX1L"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const fireStore = getFireStore(app);

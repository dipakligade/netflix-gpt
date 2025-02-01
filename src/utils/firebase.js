// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDMNA0Taq2A33nVRhUO_oKWMpk2SE9jmYQ",
    authDomain: "netflix-gpt-d184b.firebaseapp.com",
    projectId: "netflix-gpt-d184b",
    storageBucket: "netflix-gpt-d184b.firebasestorage.app",
    messagingSenderId: "188947671451",
    appId: "1:188947671451:web:6d22cfc677f855a245593e",
    measurementId: "G-PMPT1EFWH0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);
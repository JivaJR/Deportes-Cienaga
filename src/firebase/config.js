// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore/lite'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAVoHkVAu3j7YgYUiMOkH6kVpq6La0Ic0Y",
    authDomain: "deportes-cienaga.firebaseapp.com",
    projectId: "deportes-cienaga",
    storageBucket: "deportes-cienaga.appspot.com",
    messagingSenderId: "37543081191",
    appId: "1:37543081191:web:77fa54e08bc3e28ff2de42"
};

// Initialize Firebase
export const FirebaseApp  = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB   = getFirestore(FirebaseApp);

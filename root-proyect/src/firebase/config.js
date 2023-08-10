import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD9fvTLb15bYcCZcUUAxLe7UvMxxnpGYMY",
    authDomain: "reactjsproyectcoderhouse.firebaseapp.com",
    projectId: "reactjsproyectcoderhouse",
    storageBucket: "reactjsproyectcoderhouse.appspot.com",
    messagingSenderId: "297316452803",
    appId: "1:297316452803:web:dba7ee05a4ce36ad019576"
};
// Initialize Firebase
const app= initializeApp(firebaseConfig);
export const dataBase = getFirestore(app);
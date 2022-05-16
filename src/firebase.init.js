// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAOWjeJ26A70UJhG8BLihhxq91DfC46630",
    authDomain: "fruits-management-system.firebaseapp.com",
    projectId: "fruits-management-system",
    storageBucket: "fruits-management-system.appspot.com",
    messagingSenderId: "659468630096",
    appId: "1:659468630096:web:1d596b2ead5cd0ae3ef955"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
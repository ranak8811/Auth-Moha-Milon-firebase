// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD9n0uO2WPuj_-Z4VonpYNbmKM78NMkMdU",
  authDomain: "auth-moha-milon-26e06.firebaseapp.com",
  projectId: "auth-moha-milon-26e06",
  storageBucket: "auth-moha-milon-26e06.firebasestorage.app",
  messagingSenderId: "501211771885",
  appId: "1:501211771885:web:47922c4b5f363a2085ede4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
export default auth;

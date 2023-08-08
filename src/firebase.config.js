import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import {getAuth} from 'firebase/auth'
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC5Npn_51U6is4XWTvq87GqoLCCUQ6VDy8",
    authDomain: "reff-cheb.firebaseapp.com",
    projectId: "reff-cheb",
    storageBucket: "reff-cheb.appspot.com",
    messagingSenderId: "86305704397",
    appId: "1:86305704397:web:401523726010db632a9c84",
  };

const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
const auth = getAuth(app)
const storage = getStorage(app);
export {
    db,
    auth,
    storage
}
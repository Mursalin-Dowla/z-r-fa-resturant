// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCg_MFEMqFxdBK1jWC3NUJfCH3ZFYWQifk",
  authDomain: "z-fa-r-resturant.firebaseapp.com",
  projectId: "z-fa-r-resturant",
  storageBucket: "z-fa-r-resturant.appspot.com",
  messagingSenderId: "497483322178",
  appId: "1:497483322178:web:d856a643c76149d5786edb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD0SxGs6pjImBsye8utMtZy5Com_FlNLpg",
  authDomain: "d-warehouse-92910.firebaseapp.com",
  projectId: "d-warehouse-92910",
  storageBucket: "d-warehouse-92910.appspot.com",
  messagingSenderId: "820447157582",
  appId: "1:820447157582:web:f7252e574e30d9363e521f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth;
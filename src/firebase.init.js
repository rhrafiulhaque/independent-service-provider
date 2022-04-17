// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBIkCIrt-M_BlpiH0p_djnRw3oayjupzXo",
  authDomain: "doctor-moshai.firebaseapp.com",
  projectId: "doctor-moshai",
  storageBucket: "doctor-moshai.appspot.com",
  messagingSenderId: "80783111878",
  appId: "1:80783111878:web:a3242d171b7859539709c7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;

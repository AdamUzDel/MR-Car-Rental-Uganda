// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDVGd9inKLpWGIXFkKa5zFbpfXNgxc-l-E",
  authDomain: "mrcarrental-uganda.firebaseapp.com",
  projectId: "mrcarrental-uganda",
  storageBucket: "mrcarrental-uganda.appspot.com",
  messagingSenderId: "931428462235",
  appId: "1:931428462235:web:35b4729585351cf9fc203e",
  measurementId: "G-R8M2GHXL42"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
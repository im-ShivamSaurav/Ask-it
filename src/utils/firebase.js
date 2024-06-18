// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCRDoYOHiAMgdDxGjSqidFLy5k1S4wda2s",
  authDomain: "ask-it-53005.firebaseapp.com",
  projectId: "ask-it-53005",
  storageBucket: "ask-it-53005.appspot.com",
  messagingSenderId: "452857956961",
  appId: "1:452857956961:web:41652814b480bda915b820",
  measurementId: "G-62FDPP6H27"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const auth = getAuth();
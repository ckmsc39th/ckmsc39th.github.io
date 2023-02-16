// Firebase App (the core Firebase SDK) is always required and must be listed first
import * as firebase from "firebase/app";

// If you enabled Analytics in your project, add the Firebase SDK for Analytics
import "firebase/analytics";

// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDWG12tWu3p3n5xFIPaH-UV7835WoUuhbA",
  authDomain: "luminescenceckmsc39th.firebaseapp.com",
  projectId: "luminescenceckmsc39th",
  storageBucket: "luminescenceckmsc39th.appspot.com",
  messagingSenderId: "815292617893",
  appId: "1:815292617893:web:b1baa918336aaf5187294c",
  measurementId: "G-B9551N51HL"
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
firebase.initializeApp(firebaseConfig);
firebase.analytics();

export { firebase }

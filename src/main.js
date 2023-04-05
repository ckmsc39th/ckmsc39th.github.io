import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./router";
import navbar from "./shared/Navbar.vue";
import VueFeather from "vue-feather";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDWG12tWu3p3n5xFIPaH-UV7835WoUuhbA",
  authDomain: "luminescenceckmsc39th.firebaseapp.com",
  projectId: "luminescenceckmsc39th",
  storageBucket: "luminescenceckmsc39th.appspot.com",
  messagingSenderId: "815292617893",
  appId: "1:815292617893:web:b1baa918336aaf5187294c",
  measurementId: "G-B9551N51HL",
};

// initialize the firebass App
const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebaseApp.auth();
const db = firebaseApp.firestore();

export { auth, db };

createApp(App)
  .use(router, VueFeather)
  .component("navbar", navbar)
  .component(VueFeather.name, VueFeather)
  .mount("#app");

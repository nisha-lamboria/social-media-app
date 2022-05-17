import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
// import { seedDatabase } from "./seed";
const firebaseConfig = {
  apiKey: "AIzaSyARjXtSyM7f3lH6pPPMYoFXmXjoAnIhpVw",
  authDomain: "social-media-9552d.firebaseapp.com",
  projectId: "social-media-9552d",
  storageBucket: "social-media-9552d.appspot.com",
  messagingSenderId: "640332573964",
  appId: "1:640332573964:web:950a9699ea1ab8afd16d29",
};

const firebaseInit = firebase.initializeApp(firebaseConfig);
const {FieldValue} = firebase.firestore;
// seedDatabase(firebaseInit);
export { firebaseInit,FieldValue}; 

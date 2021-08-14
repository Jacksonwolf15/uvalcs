import { initializeApp } from "firebase/app";
import "firebase/database";


const config = {
  apiKey: "AIzaSyDeAQw1gPdDTVR6kF4ru7O1ae-9j3cPuPs",
  authDomain: "uvalol-989f6.firebaseapp.com",
  databaseURL: "https://uvalol-989f6-default-rtdb.firebaseio.com",
  projectId: "uvalol-989f6",
  storageBucket: "uvalol-989f6.appspot.com",
  messagingSenderId: "784419543132",
  appId: "1:784419543132:web:29aa78c88292bb10a4ae99",
  measurementId: "G-D631FY7R8W"
};

const firebaseApp = initializeApp(config)

export default firebaseApp

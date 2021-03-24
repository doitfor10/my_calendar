import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  //config 정보
  apiKey: "AIzaSyAHXtNE5a_RyW1W3UbEF9brAfFAHPB6MbE",
  authDomain: "my-exciting-calendar.firebaseapp.com",
  projectId: "my-exciting-calendar",
  storageBucket: "my-exciting-calendar.appspot.com",
  messagingSenderId: "433972960908",
  appId: "1:433972960908:web:caaa4721c3bed82a5725a9",
  measurementId: "G-VB1JXPW7R6"
};

firebase.initializeApp(firebaseConfig);

const firestore = firebase.firestore();

export { firestore };
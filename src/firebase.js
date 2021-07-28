import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCkA9lhGJXuMJ58KxxxywP66y0t3EKh5l0",
  authDomain: "challenge-c6016.firebaseapp.com",
  projectId: "challenge-c6016",
  storageBucket: "challenge-c6016.appspot.com",
  messagingSenderId: "94968463977",
  appId: "1:94968463977:web:bb915fd2c3ba60d0db58f8",
  measurementId: "G-W8271VKYST",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db, auth };

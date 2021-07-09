import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyBWUXmoaoMIkDo9E_e0Sj0A_gKBbmd289Y",
  authDomain: "bigboomuk.firebaseapp.com",
  databaseURL: "https://bigboomuk.firebaseio.com",
  projectId: "bigboomuk",
  storageBucket: "bigboomuk.appspot.com",
  messagingSenderId: "68712341977",
  appId: "1:68712341977:web:05f8152e4aea45aeb879c8",
  measurementId: "G-47HS0MG2RD",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;

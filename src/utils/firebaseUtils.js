import firebase from 'firebase';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBRA-oV-2wYxgxfhmJZI8fnSXryexjm4as",
  authDomain: "burger-queen-f9f7f.firebaseapp.com",
  databaseURL: "https://burger-queen-f9f7f.firebaseio.com",
  projectId: "burger-queen-f9f7f",
  storageBucket: "burger-queen-f9f7f.appspot.com",
  messagingSenderId: "692395331650",
  appId: "1:692395331650:web:48c5e9e8ff1c153d9cdddb",
  measurementId: "G-JF2V19JN9B"
};

const firebaseApp = firebase.initializeApp(firebaseConfig).firestore();

export default firebaseApp;

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



// const config = {
//   apiKey: process.env.REACT_APP_API_KEY,
//   authDomain: process.env.REACT_APP_AUTH_DOMAIN,
//   databaseURL: process.env.REACT_APP_DATABASE_URL,
//   projectId: process.env.REACT_APP_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
// };


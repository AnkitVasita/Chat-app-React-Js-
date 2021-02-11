import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCyU9tPAxFRUo8LVaxa8HIfRy5GlPw3boY",
  authDomain: "chat-app-1b5f6.firebaseapp.com",
  projectId: "chat-app-1b5f6",
  storageBucket: "chat-app-1b5f6.appspot.com",
  messagingSenderId: "172055360388",
  appId: "1:172055360388:web:057fd52b2d8361327ea3d1",
  measurementId: "G-M3SWNZLY8G",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;

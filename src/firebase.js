import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCdDDjO3okXFrKLrTiMTIGrtcY235v4s7s",
  authDomain: "facebook-clone-f7412.firebaseapp.com",
  projectId: "facebook-clone-f7412",
  storageBucket: "facebook-clone-f7412.appspot.com",
  messagingSenderId: "857899528549",
  appId: "1:857899528549:web:53f2ea506d4005fc6ab18c",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();

console.log(db);

export { db, auth, provider };

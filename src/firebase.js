import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAaNwV1fNeh2ZGYDCE_c99aBr7RyWOY954",
  authDomain: "snapchat-clone-b1f83.firebaseapp.com",
  projectId: "snapchat-clone-b1f83",
  storageBucket: "snapchat-clone-b1f83.appspot.com",
  messagingSenderId: "1037071713984",
  appId: "1:1037071713984:web:2b7cf99d19e0950c66cf25",
  measurementId: "G-YJVH43DEJ6",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

const storage = firebase.storage();

const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, storage, provider };

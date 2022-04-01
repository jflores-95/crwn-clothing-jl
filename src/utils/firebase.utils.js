// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
// https://firebase.google.com/docs/web/setup#available-libraries

import {
  getFirestore,
  doc,
  getDoc, //getting the document data
  setDoc, //setting the document data
} from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAIJS7c9mV1e7Ywi194fzB_qWf-Ahlc5sc",
  authDomain: "crwn-clothing-2c660.firebaseapp.com",
  projectId: "crwn-clothing-2c660",
  storageBucket: "crwn-clothing-2c660.appspot.com",
  messagingSenderId: "326393099509",
  appId: "1:326393099509:web:108f853714f742c13081bc",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, "users", userAuth.uid); //database, collections, identifier
  const userSnapShot = await getDoc(userDocRef); //obtaining the data of the Document, so we can see if exists in the db

  if (!userSnapShot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, { displayName, email, createdAt });
    } catch (error) {
      console.error("error creating the user", error.message);
    }
  }

  return userDocRef;
};

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { collection, getFirestore } from "firebase/firestore";
// import { getRemoteConfig } from "firebase/remote-config";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAmQczOrl5bKlGKAq0MxhKLpQQXL7na4EQ",
  authDomain: "nfts-marketplace.firebaseapp.com",
  databaseURL: "https://nfts-marketplace-default-rtdb.firebaseio.com",
  projectId: "nfts-marketplace",
  storageBucket: "nfts-marketplace.appspot.com",
  messagingSenderId: "973753223070",
  appId: "1:973753223070:web:5f04502f52a2edb331388f",
  measurementId: "G-V481GRKR4F"

  
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// const db = getFirestore()
// const colRef = collection(db, 'cart')

export const init = () => {
  initializeApp(firebaseConfig);
};
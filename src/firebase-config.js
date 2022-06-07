// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const config = {
  apiKey: "AIzaSyDHN870blehX9hePC_AuTrV7kp9JgjO37U",
  authDomain: "odin-project-phototagging.firebaseapp.com",
  projectId: "odin-project-phototagging",
  storageBucket: "odin-project-phototagging.appspot.com",
  messagingSenderId: "374729458337",
  appId: "1:374729458337:web:d236ac344640029299e6e0"
};

export function getFirebaseConfig() {
  if (!config || !config.apiKey) {
    throw new Error('No Firebase configuration object provided.' + '\n' +
    'Add your web app\'s configuration object to firebase-config.js');
  } else {
    return config;
  }
}

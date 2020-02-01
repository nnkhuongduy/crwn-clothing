import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCYrcSktPyRLGrZA-WM9NMoqRTg7w2qQnM",
    authDomain: "crwn-db-19e14.firebaseapp.com",
    databaseURL: "https://crwn-db-19e14.firebaseio.com",
    projectId: "crwn-db-19e14",
    storageBucket: "crwn-db-19e14.appspot.com",
    messagingSenderId: "891968036149",
    appId: "1:891968036149:web:91bab6e03de43f6e90007c",
    measurementId: "G-CW06JMMMW5"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

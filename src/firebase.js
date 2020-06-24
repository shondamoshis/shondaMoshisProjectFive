import firebase from 'firebase/app';
import 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyAkx6OXoX35t6QZKKJT-lmJIzfSQ8ekPuU",
    authDomain: "practice-gratitude.firebaseapp.com",
    databaseURL: "https://practice-gratitude.firebaseio.com",
    projectId: "practice-gratitude",
    storageBucket: "practice-gratitude.appspot.com",
    messagingSenderId: "106297587589",
    appId: "1:106297587589:web:a0db08247f6a89e64fb6ec"
};

firebase.initializeApp(firebaseConfig);

export default firebase;

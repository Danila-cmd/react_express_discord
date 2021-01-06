import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyAi22Dp8C3ymmg0AW0StvDUnXkzRXcjtYo",
    authDomain: "discord-clone-73383.firebaseapp.com",
    projectId: "discord-clone-73383",
    storageBucket: "discord-clone-73383.appspot.com",
    messagingSenderId: "106849084564",
    appId: "1:106849084564:web:081356c3ea8843f5a24081",
    measurementId: "G-YDQY9836DW"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {auth, provider};
export default db;
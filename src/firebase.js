import firebase from 'firebase';


const firebaseConfig = {
    apiKey: "AIzaSyBLW0GyJgA5RAIec0r75ekPGy2To-olp7k",
    authDomain: "linkedin-clone-aaa95.firebaseapp.com",
    projectId: "linkedin-clone-aaa95",
    storageBucket: "linkedin-clone-aaa95.appspot.com",
    messagingSenderId: "937430881652",
    appId: "1:937430881652:web:a3fcde215b311c6fa84821",
    measurementId: "G-DT6GKWGRTH"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db, auth };
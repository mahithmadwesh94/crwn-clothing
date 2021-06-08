import firebase from 'firebase/app';
<<<<<<< HEAD
import 'firebase/firestore';
=======
import 'firbase/firestore';
>>>>>>> ecf177e332d4ac90a1e2a8062e6540b3aa8080b7
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCVk0FRYa034ax6K5YQnbum20hX0oZQUl4",
    authDomain: "crwn-db-3198d.firebaseapp.com",
    projectId: "crwn-db-3198d",
    storageBucket: "crwn-db-3198d.appspot.com",
    messagingSenderId: "971499228892",
    appId: "1:971499228892:web:2148822a8e6bfb2e89ae19",
    measurementId: "G-XTT36T9SB4"
}

firebase.initializeApp(config)


export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
<<<<<<< HEAD
provider.setCustomParameters({ prompt: 'select_account' });
=======
provider.setCustomParameters({ prompt: 'Select_account' });
>>>>>>> ecf177e332d4ac90a1e2a8062e6540b3aa8080b7
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
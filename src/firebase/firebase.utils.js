import firebase from 'firebase/app';
import 'firebase/firestore';
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

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if (!snapShot.exists) {
        const { displayName, email } = userAuth

        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error) {
            console.log('error creating user', error.message)
        }
    }

    return userRef;


}

firebase.initializeApp(config)


export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
        apiKey: "AIzaSyAW9xgbj0jMk_xqHl-cCmcPHbb3_ZOQaq8",
        authDomain: "clothing-store-db-407b4.firebaseapp.com",
        databaseURL: "https://clothing-store-db-407b4.firebaseio.com",
        projectId: "clothing-store-db-407b4",
        storageBucket: "clothing-store-db-407b4.appspot.com",
        messagingSenderId: "866465600575",
        appId: "1:866465600575:web:c66c5f3071e089e1d7d48a",
        measurementId: "G-Q5QFEPX2D2"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;




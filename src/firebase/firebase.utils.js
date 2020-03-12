
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

export const createUserProfileDocument = async(userAuth, additionalData) => {
        if(!userAuth) return;

        const userRef = firestore.doc(`users/${userAuth.uid}`);
        const snapShot = await userRef.get();

        if(!snapShot.exists) { //userRef returns from firestore doc a documentReferenec which tells exists (true/false if user already in database)
                //if user does not exists create by using set() method 
                const { displayName, email } = userAuth;
                const createAt = new Date();

                try {
                        await userRef.set({
                                displayName,
                                email,
                                createAt,
                                ...additionalData
                        })
                } catch(error) {
                        console.log('error creating user', error.message)
                }
        }
        return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();
//Sign-in through GoogleAuthProvider
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;




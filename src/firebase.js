import firebase from "firebase/compat/app"
import "firebase/compat/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDStFR5S8L3Zk02BKdlt2DtV_5KTB2ZAB8",
  authDomain: "cubo-de723.firebaseapp.com",
  projectId: "cubo-de723",
  storageBucket: "cubo-de723.appspot.com",
  messagingSenderId: "791947038076",
  appId: "1:791947038076:web:041cd789544e06293ce8f9"
};
const app = firebase.initializeApp(firebaseConfig)

export const getFirestore = () => {
    return firebase.firestore(app)
}
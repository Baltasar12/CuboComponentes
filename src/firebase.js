import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyDStFR5S8L3Zk02BKdlt2DtV_5KTB2ZAB8",
  authDomain: "cubo-de723.firebaseapp.com",
  projectId: "cubo-de723",
  storageBucket: "cubo-de723.appspot.com",
  messagingSenderId: "791947038076",
  appId: "1:791947038076:web:041cd789544e06293ce8f9"
};
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
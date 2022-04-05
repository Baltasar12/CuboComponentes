import { initializeApp } from "firebase/app"
import {
	addDoc,
	collection,
	doc,
	getDoc,
	getDocs,
	getFirestore,
	Timestamp,
	updateDoc,
} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDStFR5S8L3Zk02BKdlt2DtV_5KTB2ZAB8",
  authDomain: "cubo-de723.firebaseapp.com",
  projectId: "cubo-de723",
  storageBucket: "cubo-de723.appspot.com",
  messagingSenderId: "791947038076",
  appId: "1:791947038076:web:041cd789544e06293ce8f9"
};
export const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

// Traer TODOS los items
export const getItems = async () => {
	const items = await getDocs(collection(db, "items"))
	return items
}

// Traer UN item
export const getItem = async (id) => {
	const item = await getDoc(doc(db, "items", id))
	return item
}

// Generación de order
export const generateOrder = async (order) => {
	const newOrder = addDoc(collection(db, "orders"), {
		...order,
		date: Timestamp.fromDate(new Date()),
	})
	return newOrder
}

// Manejar stock --> plus
export const updateStock = async (itemId, quantity) => {
	const item = await getDoc(doc(db, "items", itemId))
	await updateDoc(doc(db, "items", itemId), {
		stock: item.data().stock - quantity,
	})
}

export default db
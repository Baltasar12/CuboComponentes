import React, {useState, useEffect} from 'react';
import {useParams} from "react-router-dom";
//import Products from '../../listProducts';
import ItemDetail from '../ItemDetail/ItemDetail' ;
import { getFirestore } from 'firebase/firestore';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../firebase';


const ItemDetailContainer = () => {
    const [loading, setLoading] = useState(false);
    const [item, setItem] = useState([]);
    
    const {productId} = useParams();
    
   /* useEffect(() =>{
        
        const db = getFirestore()
        const getItem = db.collection("itemCollection").doc(productId)

        getItem.get().then((querySnapshot) => {
            setItem(querySnapshot.data())
            setLoading(false) 
        })
        .catch((e) => {console.log(e)})

    }, [productId])*/



    useEffect(()=>{
        const getData = async()=>{
            const query = collection(db, 'items');
            const response = await getDocs(query);
            const data = response.docs.map(doc=>doc.data());
            console.log('data', data)
        }
    
        getData();
    },[])


return(
    <> 
    {loading ? "Cargando Información..." : <ItemDetail item={item} />}
    </>    
)   
}
export default ItemDetailContainer;



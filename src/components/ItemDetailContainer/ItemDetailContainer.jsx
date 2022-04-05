import React, {useState, useEffect} from 'react';
import {useParams} from "react-router-dom";
import ItemDetail from '../ItemDetail/ItemDetail' ;
import {useAppContext} from '../AppContext';
import { getItem } from '../firebase/firebaseService';

const ItemDetailContainer = () => {
   /* const [loading, setLoading] = useState(false);
    const [item, setItem] = useState([]);
    const {productId} = useParams();
    useEffect(() =>{ 
        const db = getFirestore()
        const getItem = db.collection("itemCollection").doc(productId)

        getItem.get().then((querySnapshot) => {
            setItem(querySnapshot.data())
            setLoading(false) 
        })
        .catch((e) => {console.log(e)})
    }, [productId])*/


    const {products} = useAppContext();
    const [item, setItem] = useState();
    const {id} = useParams();

    useEffect(()=>{
        getItem(id).then((item)=>setItem({...item.data(), id:item.id}))

    },[id,products])

    const[terminar,setTerminar]=useState(false);
    const onAdd = ()=>{
        setTerminar(true);
    }


return(
    <> 
    {loading ? "Cargando Información..." : <ItemDetail item={item} />}
    </>    
)   
}
export default ItemDetailContainer;



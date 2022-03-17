//Main
import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import './ItemListContainer.scss';
import ItemList from '../ItemList/ItemList';
import Products from "../../listProducts";
import { getFirestore } from 'firebase/firestore';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../firebase';



const ItemListContainer = () => {

   /* const [list, setList] = useState([]);
    const {categoryName} = useParams();

    function filtroCategoria(item) {
        return item.category === categoryName
    }

    useEffect(() => {
        setTimeout(() =>{
            let itemsPorCategoria = Products.filter(filtroCategoria);
            setList(categoryName ? itemsPorCategoria : Products);
        },1000)
    },)
    */
    const [list, setList] = useState([]);
    const {categoryName} = useParams();
    useEffect(()=>{
        const getData = async()=>{
            const db = getFirestore()
            let itemCollection;

            if (categoryName){
                itemCollection = db.collection("ItemCollection").where("category", "==", categoryName)
            } else{
                itemCollection = db.collection("ItemCollection")
            }
            
            const itemCollectionQuery = itemCollection.get()
    
            itemCollectionQuery.then((querySnapshot) => {
                setList(querySnapshot.docs.map(doc => ({...doc.data(), id: doc.categoryId})))
            })
            .catch((e) => {console.log(e)})
        }
    
        getData();
    },[])

    
    return(
        <section>
            <ItemList list={list} />
        </section>
        
    )
}

//<ItemList list={list} />
// <p> <span>CUBO</span> es una tienda que ofrece los productos electronicos más recientes del mercado. Contamos con una gran variedad de productos, entre los cuales tenemos: teclados, auriculares, notebooks, entre otros. Estos productos son ideales para gaming, trabajo y estudio.</p>
            

export default ItemListContainer;
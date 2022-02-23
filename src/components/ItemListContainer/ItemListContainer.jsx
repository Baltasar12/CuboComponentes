//Main
import React, {useState, useEffect} from 'react';
import './ItemListContainer.scss';
import ItemList from '../ItemList/ItemList';
import Products from "../../listProducts";


const listProducts = new Promise (
    (result, reject) => setTimeout(() => result(Products), 3000)

);

const ItemListContainer = ({greeting}) => {

    const [list, setList] = useState([]);
    useEffect(() => {
        listProducts.then(setList)
    }, [])

    return(
        <section>
            <h2>{greeting}</h2>
            <p> <span>CUBO</span> es una tienda que ofrece los productos electronicos más recientes del mercado. Contamos con una gran variedad de productos, entre los cuales tenemos: teclados, auriculares, notebooks, entre otros. Estos productos son ideales para gaming, trabajo y estudio.</p>
            
            <ItemList list={list} />
        </section>
    )
}
//<ItemList list={list} />

export default ItemListContainer;
//Main
import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import './ItemListContainer.scss';
import ItemList from '../ItemList/ItemList';
import Products from "../../listProducts";


const ItemListContainer = () => {

    const [list, setList] = useState([]);
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
    
    
    return(
        <section>
            <ItemList list={list} />
        </section>
        
    )
}

//<ItemList list={list} />
// <p> <span>CUBO</span> es una tienda que ofrece los productos electronicos más recientes del mercado. Contamos con una gran variedad de productos, entre los cuales tenemos: teclados, auriculares, notebooks, entre otros. Estos productos son ideales para gaming, trabajo y estudio.</p>
            

export default ItemListContainer;
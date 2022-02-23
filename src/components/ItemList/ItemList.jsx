//Item
import React from "react";
import Item from "../Item/Item";
import './ItemList.css';

const ItemList =({list}) => {
    return(
        <section className="product-list">
            {list.map(product => 
                <Item key={product.id} item={product}/>
            )}
        </section>

    )
}

export default ItemList;
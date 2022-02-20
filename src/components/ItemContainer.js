//Main
import React from "react";
import ItemList from "./ItemList";

export default function ItemContainer(props) {
    const { products, onAdd } = props;
    return(
    <main className="block column2">
        <h2>Productos</h2>
        <div className="row">
        {products.map((product)=>(
            <ItemList key={product.id} product={product}></ItemList>
        )
        )}
        </div>
    </main>
    );
}
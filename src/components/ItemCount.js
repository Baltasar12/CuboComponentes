//Basket
import React from "react";

export default function ItemCount(props) {
    const{cartItems, onAdd, onRemove} = props;
    return(
        //lo que hace el div de "cartItems" es que si está vacio o es igual a 0 va a renderizar el mensaje
        <aside className="block column1">
            <h2>Carrito</h2>
            <div>
                {cartItems.length === 0 && <div>El carro está vacio</div>}
            </div>
            {cartItems.map((item) =>(
                <div key={item.id} className='row'>
                 <div className="column2">{item.title}</div> 
                 <div className="column2">
                    <button onClick={()=>onAdd(item)} className='add'>+</button>
                    <button onClick={()=>onRemove(item)} className='remove'>-</button>
                 </div>  
                 <div className="column2 text-right">
                     {item.qty} x $ {item.price.toFixed(2)}
                 </div>
                </div>
            ))}
        </aside>
    );
}
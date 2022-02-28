//Basket
import React from "react"
import './ItemCount.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { faMinus } from '@fortawesome/free-solid-svg-icons'

//Desarrollado más acorde a las filminas y de forma más simple
const ItemCount = ({stock, initial, count, increase, decrease, onAdd}) =>{



    return(
        <div className="card-count">
            <h5>Cantidad:</h5>
            <div className="_grid">
              <button className="_btn _column product-subtract" onClick={decrease} disabled={count === initial} ><FontAwesomeIcon icon={faMinus} /></button>
              <div className="_column product-qty">{count}</div>
              <button className="_btn _column product-plus" onClick={increase} disabled={count === stock} ><FontAwesomeIcon icon={faPlus} /></button>
            </div>
            <button className="_btn product-add" onClick={onAdd}>Agregar al Carrito</button>

        </div>
    )
}
export default ItemCount







/*export default function ItemCount(props) {
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
}*/
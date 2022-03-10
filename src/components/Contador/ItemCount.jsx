import React, {useState} from "react";
import './ItemCount.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faMinus } from '@fortawesome/free-solid-svg-icons';

const ItemCount = ({stocks,  initial, onAdd}) =>{
    const [count, setCount] = useState(initial)
    const [stock, setSotck] = useState(stocks)
   
    const increase = () => { 
        if(count < stocks){
            setCount(count + 1)
            setSotck(stock - 1)
            console.log(count)
        }
        
    }

    const decrease = () => { 
        if(count > initial){
            setCount(count - 1)
            setSotck(stock + 1)
        }
        
    }

    onAdd(count)

    return(
        <div className="card-count">
            <h5>Cantidad:</h5>
            <div className="grid">
              <button className="column product-subtract" onClick={decrease} disabled={count === initial} ><FontAwesomeIcon icon={faMinus} /></button>
              <div className="column product-qty">{count}</div>
              <button className="column product-plus" onClick={increase} disabled={count === stock} ><FontAwesomeIcon icon={faPlus} /></button>
            </div>
            <p>Unidades Disponibles: {stock-initial}</p>
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
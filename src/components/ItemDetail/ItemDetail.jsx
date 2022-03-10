import './ItemDetail.scss';
import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import ItemCount from "../Contador/ItemCount";
import useCartContext from '../CartContext/CartContext';

const ItemDetail = ({item}) => {
    const stocks = 10
    const initial = 1
    const [add, setAdd] = useState(false)
    const [quantity, setQuantity] = useState(1)
    const { addItem } = useCartContext()

    const itemQuantity = (count) => {
        setQuantity(count)
    }

    const addToCart = () => {
        addItem(item, quantity)
        setAdd(true)
    }


    return (
        
        <div className="card-product-detail">
            <div className="img-detail">
                <img src={item.img} alt={item.id} width="350" />
            </div>
            <div className="info-detail">
                <h3>{item.name}</h3>
                <p className="card-description">{item.description}</p>
                <p className="card-price">{item.price}</p>
                <ItemCount stocks={stocks}
                    stock={stocks}
                    initial={initial}
                    onAdd={itemQuantity}
                />
                <button className="btn" onClick={addToCart}>Agregar al Carrito</button>
                {add ? <Link to= {'/cart'}><button className="btn-finalizar" onClick={addToCart}>Comprar Ahora</button></Link> : null}
            </div>
        </div>
           
    )
}

export default ItemDetail

// {add ? <Link to= {'/cart'}><button className="btn-finalizar" onClick={addToCart}>Comprar Ahora</button></Link> : null}
// {add ? <Link to= {'/cart'}><button className="btn">Comprar Ahora</button></Link> : null}
import React from 'react'

export default function ItemList(props) {
    const {product} = props;
  return (
    <div>
        <img className='small' src={product.pictureUrl} alt={product.title}></img>
        <h3>{product.title}</h3>
        <div>$ {product.price}</div>
        <div>
            <button>Agregar al carro</button>
        </div>
    </div>
  )
}

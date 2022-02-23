import React from "react"
import './Item.scss'



const Item = ({item: { id, name, description, img }}) => {
    return(
        <div className="card-product">
            <img src={img} alt={id} width="350" />
            <h2>{name}</h2>
            <p>{description}</p>
            <button>Agregar</button>
        </div>
    )

}
export default Item

/*
export default function ItemList(props) {
    const {product, onAdd} = props;
  return (
    <div>
        <img className='small' src={product.pictureUrl} alt={product.title}></img>
        <h3>{product.title}</h3>
        <div>$ {product.price}</div>
        <div>
            <button onClick={()=>onAdd(product)}>Agregar al carro</button>
            <button><a href="./ItemDetailContainer.js">Más info</a></button>
        </div>
    </div>
  )
}
*/
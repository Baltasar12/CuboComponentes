import React from 'react';
import Item from '../Item/Item';
import ItemCount from "../Contador/ItemCount";

const ItemDetail = ({item}) => {

    return (
        <>
        <Item item={item} />
        <ItemCount stock={10} initial={1}/>
        </>
    )
}

export default ItemDetail



/*export default function ItemDetail(props) {
  const {products} = props;
    return (
      <div>
          <h2>{products.title}</h2>
      </div>
    )
  }*/
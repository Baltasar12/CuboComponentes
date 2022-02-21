import NavBar from './components/NavBar';
import ItemContainer from './components/ItemContainer';
import ItemCount from './components/ItemCount'
import data from './components/Item'
import { useState } from 'react';

function App() {
  const{products} = data;

  const [cartItems, setCartItems] = useState([]);

  const onAdd = (product) =>{
    const exist = cartItems.find(x => x.id === product.id);
    if(exist){
      setCartItems(cartItems.map(x => x.id === product.id ? {...exist, qty: exist.qty+1}: x));
    }else{
      setCartItems([...cartItems, {...product, qty:1}]);
    }
  }

  const onRemove = (product) =>{
    const exist = cartItems.find((x)=> x.id === product.id);
    if(exist.qty===1){
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    }else{
      setCartItems(cartItems.map(x => x.id === product.id ? {...exist, qty: exist.qty-1}: x));
    }
  }

  return (
    <div className="App">
      <NavBar/>
      <div className="row">
        <ItemContainer onAdd={onAdd} products={products}/>
        <ItemCount onAdd={onAdd} onRemove={onRemove} cartItems={cartItems}/>
      </div>
    </div>
  );
}

export default App;

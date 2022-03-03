import {BrowserRouter,Routes,Route} from 'react-router-dom';
import React from 'react'
import './App.scss';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Home from './components/Home/Home';
import Cart from './components/Cart/Cart';
import {StoreProvider} from './components/CartContext/CartContext';



function App() {

  return (
    
    <>
    <StoreProvider>
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Home greeting="Bienvenidos"/>}/>
        <Route path='/category/:categoryName?' element={<ItemListContainer/>}/>
        <Route path='/Item/:productId' element={<ItemDetailContainer/>}/> 
        <Route path='/cart' element={<Cart/>}/>
      </Routes>
    </BrowserRouter>
    </StoreProvider>
    </>
    
  );
}

export default App;

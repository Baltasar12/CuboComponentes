import {BrowserRouter,Routes,Route} from 'react-router-dom';
import React from 'react'
import './App.scss';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';



function App() {

  return (
    
    <>
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path='/' element={<ItemListContainer greeting="Bienvenidos"/>}/>
        <Route path='/Item/:id' element={<ItemDetailContainer/>}/> 
      </Routes>
    </BrowserRouter>
    </>
    
  );
}

export default App;

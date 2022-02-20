import NavBar from './components/NavBar';
import ItemContainer from './components/ItemContainer';
import ItemCount from './components/ItemCount'
import data from './components/Item'

function App() {
  const{products} = data;

  return (
    <div className="App">
      <NavBar/>
      <div className="row">
        <ItemContainer products={products}/>
        <ItemCount/>
      </div>
    </div>
  );
}

export default App;

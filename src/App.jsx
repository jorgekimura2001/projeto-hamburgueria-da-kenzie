import { useEffect,useState } from 'react';
import './App.css';
import api from './services/api';
import ProductsList from './components/ProductsList'
import GlobalStyle from './styles/global';
import Header from './components/Header';
import Cart from './components/Cart';
import Modal from './components/Modal';

function App() {

  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [currentSale, setCurrentSale] = useState([])
  const [modal, setModal] = useState(false)

  useEffect(() => {
    api.get()
    .then(response => setProducts(response.data))
    .catch(error => console.log(error))
  }, [])

  function showProducts(inputValue){
    const filteredProducts = products.filter(product => product.name.toLowerCase() === inputValue.toLowerCase() || product.category.toLowerCase() === inputValue.toLowerCase())
    setFilteredProducts(filteredProducts)
  }

  function handleClick(productId){
    const productSelected = currentSale.find(product => product.id === productId)

    if(!productSelected){
      const productFounded = products.find(product => product.id === productId)
      setCurrentSale((oldProduct) => [...oldProduct, productFounded])
    }else {
      setModal(true)
    }
  }

  return (
    <div className="App">
      <GlobalStyle/>
      <Modal modal={modal} setModal={setModal}/>
      <Header showProducts={showProducts}/> 
      <ProductsList handleClick={handleClick} products={products} filteredProducts={filteredProducts}/>
      <Cart currentSale={currentSale} setCurrentSale={setCurrentSale}/>
      
    </div>
  );
}

export default App;

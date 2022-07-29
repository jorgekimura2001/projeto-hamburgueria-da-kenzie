import { useEffect,useState } from 'react';
import './App.css';
import api from './services/api';
import ProductsList from './components/ProductsList'
import GlobalStyle from './styles/global';
import Header from './components/Header';
import Cart from './components/Cart';
import Modal from './components/Modal';
import { Container } from './styles/styles';

function App() {

  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [currentSale, setCurrentSale] = useState([])
  const [modal, setModal] = useState(false)
  const [inputValue, setInputValue] = useState("")

  useEffect(() => {
    api.get()
    .then(response => setProducts(response.data))
    .catch(error => console.log(error))
  }, [])

  function showProducts(inputValue){
    const filteredProducts = products.filter(product => product.name.toLowerCase() === inputValue.toLowerCase() || product.category.toLowerCase() === inputValue.toLowerCase())
    setFilteredProducts(filteredProducts)
    setInputValue(inputValue)
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
      <Header showProducts={showProducts}/>  
      {
        modal && <Modal setModal={setModal}/>
      }
      {
          filteredProducts.length !== 0 &&
          <Container> 
            <p> Resultado para: <span>{inputValue}</span></p> 
          </Container>
        }
      <main>
        <div className='main--content'>
          <ProductsList handleClick={handleClick} products={products} filteredProducts={filteredProducts} inputValue={inputValue}/>
        </div>
        <Cart currentSale={currentSale} setCurrentSale={setCurrentSale}/>
      </main>
    </div>
  );
}

export default App;

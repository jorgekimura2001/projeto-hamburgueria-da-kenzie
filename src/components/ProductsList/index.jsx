import Product from "../Product"
import { Container } from "./styles"

function ProductsList({products, filteredProducts, handleClick, inputValue}){
    return (
        <Container>
                {   filteredProducts.length <= 0 ?
                    products.map((product) => <Product category={product.category} name={product.name} price={product.price} handleClick={handleClick} key={product.id} img={product.img} id={product.id}/>)
                    :                
                    filteredProducts.map((product) => 
                    <Product category={product.category} name={product.name} price={product.price} handleClick={handleClick} key={product.id} img={product.img} id={product.id}/>)  
                }
        </Container>
    )
}

export default ProductsList
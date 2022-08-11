import Product from "../Product";
import { Container } from "./styles";

function ProductsList({ products, filteredProducts, handleClick, inputValue }) {

    console.log(inputValue)
  return (
    <Container>
      {
        // filteredProducts.length === 0 ?
        products
          ?.filter(
            (product) =>
              product.name.toLowerCase().includes(inputValue.toLowerCase()) ||
              product.category.toLowerCase().includes(inputValue.toLowerCase())
          )
          .map((product) => (
            <Product
              category={product.category}
              name={product.name}
              price={product.price}
              handleClick={handleClick}
              key={product.id}
              img={product.img}
              id={product.id}
            />
          ))
        // :
        // filteredProducts.map((product) =>
        // <Product category={product.category} name={product.name} price={product.price} handleClick={handleClick} key={product.id} img={product.img} id={product.id}/>)
      }
    </Container>
  );
}

export default ProductsList;

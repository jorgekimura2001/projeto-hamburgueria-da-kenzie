import { Container } from "./styles"

function ProductCart ({img, name, category, id, removeProduct}){
    
    return (
        <Container>
            <img src={img} alt={name} />
            <div className="info--product">
                <p>{name}</p>
                <p>{category}</p>
            </div>
            <button 
            onClick={() => removeProduct(id)}>Remover</button>
        </Container>
    )
}
export default ProductCart
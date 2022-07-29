import { Container } from "./styles"

function Product({handleClick, id, name, price, category, img}){
    return(
        <Container>
            <figure>
                <img src={img} alt={name} />
            </figure>
            <div>
                <p>{name}</p>
                <p>{category}</p>
                {
                    price.toString().includes('.') ?
                    <span>R${price}</span>
                    :
                    <span>R$ {price}.00</span>
                }
            </div>
            <button onClick={() => handleClick(id)}>Adicionar</button>
        </Container>
    )
}
export default Product
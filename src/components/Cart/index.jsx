import CartTotal from "../CartTotal"
import ProductCart from "../ProductCart"
import { Container } from "./styles"

function Cart({currentSale, setCurrentSale}){

    function removeProduct(productRemoved){
        const filter = currentSale.filter(product => product.id !== productRemoved)
        setCurrentSale(filter)
    }

    return (
        <Container>
            <p>Carrinho de compras</p>
            {
                currentSale.length > 0 ?
                <>
                <div>
                {
                    currentSale.map((product) => <ProductCart img={product.img} name={product.name} id={product.id} currentSale={currentSale} category={product.category} key={product.id} removeProduct={removeProduct}/>)
                }
                </div>
                <CartTotal currentSale={currentSale}/>
                </>
                :
                <div>
                    <p> Seu carrinho está vazio</p>
                    <span>Adicionar itens</span>
                </div>
            }
        </Container>
    )
}
export default Cart
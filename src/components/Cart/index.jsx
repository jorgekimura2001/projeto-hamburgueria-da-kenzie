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
            <p className="cart--title">Carrinho de compras</p>
            <div className="cart--items">
            {
                currentSale.length > 0 ?
                <>
                {
                    currentSale.map((product) => <ProductCart img={product.img} name={product.name} id={product.id} currentSale={currentSale} category={product.category} key={product.id} removeProduct={removeProduct}/>)
                }
                <CartTotal setCurrentSale={setCurrentSale} currentSale={currentSale}/>
                </>
                :
                <div className="cart--none">
                    <p>Seu carrinho está vazio</p>
                    <span>Adicionar itens</span>
                </div>
            }
            </div>
        </Container>
    )
}
export default Cart
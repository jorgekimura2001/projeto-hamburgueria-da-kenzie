import separatorBar from '../../assets/separatorBar.svg'
import { Container } from './styles'

function CartTotal ({currentSale}){

    return ( 
        <Container>
            <img src={separatorBar} alt="" />    
            <section> 
                <div>
                    <span>Total</span>
                    <span>
                        {
                            currentSale.reduce((acc, current) => acc+= current.price, 0)
                        }
                    </span>
                </div>
                <button>Remover todos</button>
            </section>
        </Container>
    )
}

export default CartTotal
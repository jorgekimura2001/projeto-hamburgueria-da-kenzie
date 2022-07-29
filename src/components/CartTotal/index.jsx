import { useState } from 'react'
import separatorBar from '../../assets/separatorBar.svg'
import RemoveAllProducts from '../RemoveAllProducts'
import { Container } from './styles'

function CartTotal ({currentSale, setCurrentSale}){

    const [isOpen, setIsOpen] = useState(false)
    const result = currentSale.reduce((acc, {price}) => acc+price, 0)

    return ( 
        <Container>
            <img src={separatorBar} alt="" />    
            <section> 
                <div className='total--cart'>
                    <span>Total</span>
                    <span>R$ {result.toFixed(2)}</span>
                </div>
                <button className='button-remove-all'
                onClick={() => setIsOpen(!isOpen)}
                >Remover todos</button>
                {
                    isOpen && <RemoveAllProducts setIsOpen={setIsOpen} setCurrentSale={setCurrentSale}/>
                }
            </section>
        </Container>
    )
}

export default CartTotal
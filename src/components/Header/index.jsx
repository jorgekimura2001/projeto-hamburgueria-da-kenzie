import { useState } from "react"
import { HeaderItems } from "./styles"

function Header ({showProducts}){

    const [value, setValue] = useState('')

    function handleSubmit(event){
        event.preventDefault()
        showProducts(value)
    }

    return (
        <HeaderItems>
            <p>Burguer <span>Kenzie</span></p>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Digitar pesquisa" value={value} onChange={(evt) => setValue(evt.target.value)} />
                <button type="submit">Pesquisar</button>
            </form>  
        </HeaderItems>
    )
}
export default Header
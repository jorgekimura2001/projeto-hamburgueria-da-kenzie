import { HeaderItems } from "./styles"

function Header ({setInputValue, inputValue}){

    return (
        <HeaderItems>
            <p>Burguer <span>Kenzie</span></p>
            <div className="form">
                <input type="text" placeholder="Digitar pesquisa" value={inputValue} onChange={(evt) => setInputValue(evt.target.value)} />
                <button onClick={() => setInputValue(inputValue)}>Pesquisar</button>
            </div>
        </HeaderItems>
    )
}
export default Header
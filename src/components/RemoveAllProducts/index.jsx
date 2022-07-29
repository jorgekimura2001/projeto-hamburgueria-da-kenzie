import {AiOutlineCloseCircle} from 'react-icons/ai'
import { ContainerModal } from "./styles"
import {useEffect, useRef} from 'react'

function RemoveAllProducts ({setCurrentSale, setIsOpen}){

    const modalRef = useRef();

    useEffect(() => {
        function handleOutClick(event) {
        
        if (!modalRef.current.contains(event.target)) {
            setIsOpen(false);
        }
        }

        document.addEventListener('mousedown', handleOutClick);
        return () => {
            document.removeEventListener('mousedown', handleOutClick);
        }
    }, [])

    return(
        <ContainerModal>
            <div className="modal-box" ref={modalRef}>
                <button className='button-close' onClick={() => setIsOpen(false)}><AiOutlineCloseCircle size={25}/></button>
                <p>Você tem certeza que deseja remover todos os produtos?</p>
                <span>Após executar essa ação não será possível desfazer</span>
                <div className='button-container'>
                    <button className="cancel--button" onClick={() => setIsOpen(false)}>Cancelar</button>
                    <button className="confirm--button" onClick={() => setCurrentSale([])}>Confirmo</button>
                </div>
            </div>
        </ContainerModal>
    )
}
export default RemoveAllProducts